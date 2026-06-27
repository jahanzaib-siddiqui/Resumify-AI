const express = require('express');
const router = express.Router();
const { generateRegionalCV, parseImportedResume } = require('../services/aiService');
const Resume = require('../models/Resume');
const multer = require('multer');
const pdf = require('pdf-parse');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/generate', async (req, res) => {
    try {
        const { targetRegion, rawData, userId } = req.body;
        
        if (!targetRegion || !rawData) {
            return res.status(400).json({ error: 'targetRegion and rawData are required' });
        }

        // Call the AI service
        const generatedResume = await generateRegionalCV(targetRegion, rawData);

        // Save to DB (mocking DB if mongo isn't connected so we don't crash, but typically we want it to save)
        try {
            const newResume = new Resume({
                userId,
                targetRegion,
                rawData,
                generatedResume
            });
            await newResume.save();
            res.json({ success: true, data: generatedResume, documentId: newResume._id });
        } catch (dbError) {
            console.warn('DB Save failed, returning AI result anyway', dbError);
            res.json({ success: true, data: generatedResume, warning: 'Failed to save to DB' });
        }
        
    } catch (error) {
        console.error('Error generating resume:', error);
        res.status(500).json({ error: 'Failed to generate resume', details: error.message });
    }
});

router.post('/import', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) {
            console.error('Import Error: No file provided');
            return res.status(400).json({ error: 'No resume file uploaded' });
        }

        console.log(`Importing resume: ${req.file.originalname} (${req.file.size} bytes)`);

        let data;
        try {
            data = await pdf(req.file.buffer);
        } catch (pdfError) {
            console.error('PDF Parse Error:', pdfError);
            return res.status(500).json({ error: 'Failed to extract text from PDF', details: pdfError.message });
        }

        const rawText = data.text;
        console.log(`Extracted raw text length: ${rawText.length} characters`);

        if (!rawText || rawText.trim().length < 50) {
            console.warn('Extracted text is too short or empty');
            return res.status(400).json({ error: 'Could not extract sufficient text from this PDF. Is it an image-only scan?' });
        }

        const structuredData = await parseImportedResume(rawText);
        console.log('AI parsing successful');
        res.json({ success: true, data: structuredData });
        
    } catch (error) {
        console.error('Core Import Error:', error);
        res.status(500).json({ error: 'Failed to import resume', details: error.message });
    }
});

module.exports = router;
