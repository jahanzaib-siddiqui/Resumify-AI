const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // optional for now
    targetRegion: { type: String, required: true }, // e.g. "USA", "Germany", "UAE"
    rawData: {
        personalInfo: Object,
        experience: Array,
        education: Array,
        skills: Array
    },
    generatedResume: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);
