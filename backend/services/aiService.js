const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AQ.Ab8RN6J-1nC8M7Y7Qi6zljGGZafUzkjzFyc8XyMO1KeYCiKllw');

function getRegionRules(region) {
    const rules = {
        'USA': `
            - Max length: 1 page.
            - Strictly exclude: Photos, date of birth, age, marital status, gender.
            - Format: Reverse-chronological, high ATS compatibility.
            - Tone: Action-oriented, heavy use of quantifiable metrics. Start bullets with strong action verbs. Use American English.
        `,
        'Germany': `
            - Document Type: Lebenslauf. Format highly structured and chronological.
            - Include: Professional photo placeholder, personal details (date of birth, place of birth, nationality).
            - Tone: Factual, formal, avoid overly 'salesy' language.
        `,
        'UAE': `
            - Length: 2-3 pages. Comprehensive detail.
            - Include: Professional photo placeholder, extensive personal details (nationality, date of birth, gender, marital status).
            - Tone: Highlight prestigious projects and multinational experience. Mix of British and American styles.
        `,
        'UK': `
            - Length: 2 pages standard.
            - Format: Reverse-chronological with a strong Personal Summary at the top.
            - Exclude: Photo, date of birth, marital status.
            - Tone: Professional, use British English spelling (e.g. Optimised).
        `,
        'Australia': `
            - Length: 1-2 pages standard.
            - Format: Reverse-chronological, highly ATS compatible, clear and concise.
            - Exclude: Photo, age, religion.
            - Tone: Professional, direct, highlight achievements using Australian English vocabulary.
        `,
        'Europe': `
            - Document Type: Europass format structure.
            - Include: Factual details, language proficiencies, clear chronology.
            - Tone: Formal, objective, detailed but easy to scan.
        `,
        'Canada': `
            - Max length: 1-2 pages.
            - Strictly exclude: Photos, date of birth, marital status (illegal to request).
            - Format: Reverse-chronological, high ATS compatibility.
            - Tone: Action-oriented, heavy use of metrics. Use Canadian/American English spelling.
        `,
        'Singapore': `
            - Length: 2-3 pages. Comprehensive detail.
            - Format: Highlight prestigious companies, specific metrics, and achievements.
            - Tone: Highly professional, results-oriented, mixing British English spelling conventions.
        `,
        'Pakistan': `
            - Length: 2 pages standard.
            - Focus: Highlight technical certifications, education details, and a strong professional summary.
            - Tone: Formal, professional. Use British English conventions.
        `,
        'India': `
            - Length: 2 pages.
            - Focus: Strong emphasis on academic pedigree, CGPA/GPA, and technical projects.
            - Tone: Highly professional, technical, results-oriented.
        `,
        'China': `
            - Include: Professional photo placeholder, detailed personal summary, achievements.
            - Focus: Show stability, tenure, and hierarchical progression.
            - Tone: Respectful, formal, factual.
        `,
        'Indonesia': `
            - Include: Professional photo placeholder, social details (Date of Birth, Marital Status).
            - Focus: Mix of functional skills and solid professional history.
            - Tone: Professional, warm yet formal.
        `,
        'Japan': `
            - Format: Rirekisho/Shokurekisho inspired. Rigid chronology.
            - Include: Photo placeholder, date of birth, very specific education and certification dates.
            - Tone: Extremely formal, humble yet confident. Focus on long-term commitment.
        `,
        'Korea': `
            - Focus: Standardized test scores (TOEIC), certificates, and awards.
            - Include: Photo placeholder, birth date, military service (if applicable/implied).
            - Tone: Highly formal, standardized, achievement-focused.
        `,
        'Russia': `
            - Focus: "Key Results" for each role, technical competency, and citizenship.
            - Include: Photo placeholder, location, contact details.
            - Tone: Direct, structured, factual.
        `,
        'Turkey': `
            - Include: Professional photo placeholder, contact information.
            - Focus: Balanced view of technical skills and professional achievements.
            - Tone: Modern, professional, accessible.
        `,
        'Malaysia': `
            - Length: 2 pages.
            - Focus: Academic background, technical skills, and English proficiency.
            - Tone: Professional, following British English standards.
        `,
        'Thailand': `
            - Include: Professional photo placeholder.
            - Focus: Visual clarity, professional experience, and clear skill mapping.
            - Tone: Professional, modern, visually-oriented.
        `
    };

    return rules[region] || rules['USA']; // Default to USA
}

async function generateRegionalCV(region, rawData) {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('your_gemini')) {
        console.log("Mocking AI response because no real Gemini API key provided.");
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate AI delay
        return {
            personalInfo: {
                fullName: rawData?.personalInfo?.fullName || "Alexander Walker",
                jobTitle: rawData?.personalInfo?.jobTitle || "Senior Solutions Architect",
                email: rawData?.personalInfo?.email || "alex@example.com",
                phone: "+1 (555) 019-2045",
                address: region === 'UAE' ? 'Dubai Marina, UAE' : 'San Francisco, CA',
                summary: "A highly driven technical expert with 5+ years of experience architecting resilient scalable applications. Designed strictly for demonstrating the incredible AI Resume Builder formatting."
            },
            experience: [
                {
                   company: rawData?.experience?.[0]?.company || "TechCorp Global",
                   role: rawData?.experience?.[0]?.role || "Lead Software Engineer",
                   startDate: "Jan 2021", endDate: "Present", location: region === 'UK' ? 'London, UK' : 'New York, NY',
                   achievements: [
                       "Spearheaded the migration to a modern MERN stack, ensuring 40% faster load times.",
                       "Translated raw user workflows into robust features, increasing efficiency by 30%."
                   ]
                }
            ],
            education: [
                { institution: "University of Technology", degree: "B.S. Computer Science", startDate: "2017", endDate: "2021", location: "Boston, MA", gpa: "3.8/4.0" }
            ],
            skills: ["React & Node.js", "AI Integration", "MongoDB", "Tailwind CSS", "Systems Design", "Leadership"],
            projects: [
                { name: "AI Resume Generator", description: "Full-stack SaaS for automated ATS CV generation.", technologies: "React, Node.js, Gemini API", role: "Solo Developer" }
            ],
            certifications: [
                { name: "Advanced React Patterns", issuer: "Frontend Masters" }
            ]
        };
    }

    const regionRules = getRegionRules(region);

    const systemPrompt = `You are a world-class ATS Resume Expert and Career Coach. 
The user is applying for a job in the region: ${region}.
You must take the user's raw data and transform it into a professional, highly polished CV.
Apply the following strict regional rules:
${regionRules}

CRITICAL RULES FOR DATA INTEGRITY:
1. NEVER hallucinate or invent experience. If the user's experience array is empty, strictly return an empty array [].
2. NEVER merge or move Projects into Experience. Projects must specifically map only to the "projects" array.
3. NEVER mix Certifications into Experience or Education. Respect the boundaries of the user's input strictly.

Respond ONLY with a valid JSON object adhering to this schema:
{
    "personalInfo": {
        "fullName": "...",
        "jobTitle": "...",
        "email": "...",
        "phone": "...",
        "address": "...",
        "links": "...",
        "summary": "..."
    },
    "experience": [
        { "company": "...", "role": "...", "startDate": "...", "endDate": "...", "location": "...", "achievements": ["..."] }
    ],
    "education": [
        { "institution": "...", "degree": "...", "startDate": "...", "endDate": "...", "location": "...", "gpa": "..." }
    ],
    "projects": [
        { "name": "...", "description": "...", "technologies": "...", "role": "..." }
    ],
    "certifications": [
        { "name": "...", "issuer": "..." }
    ],
    "skills": ["..."]
}

Ensure all JSON keys and structures match exactly. Do not wrap the JSON in markdown code blocks. Just output raw JSON.`;

    const userMessage = `Here is the user's raw experience data: ${JSON.stringify(rawData)}`;

    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            systemInstruction: systemPrompt,
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.7,
            }
        });

        const response = await model.generateContent(userMessage);
        let resultText = response.response.text();
        
        // Clean markdown if present
        resultText = resultText.replace(/```json\n?|```/g, '').trim();
        
        const result = JSON.parse(resultText);
        return result;
    } catch (error) {
        console.error("Gemini AI Error:", error);
        throw new Error("AI generation failed");
    }
}

async function parseImportedResume(rawText) {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('your_gemini')) {
        return {
            personalInfo: { fullName: "Imported User", jobTitle: "Software Engineer", email: "imported@example.com" },
            experience: [], education: [], skills: [], projects: [], certifications: []
        };
    }

    const systemPrompt = `You are an expert Resume Parser. 
Extract all relevant information from the following raw text of a resume and structure it INTO VALID JSON.
Use the following exact schema:
{
    "personalInfo": {
        "fullName": "...",
        "jobTitle": "...",
        "email": "...",
        "phone": "...",
        "address": "...",
        "links": "...",
        "summary": "..."
    },
    "experience": [
        { "company": "...", "role": "...", "startDate": "...", "endDate": "...", "location": "...", "description": "..." }
    ],
    "education": [
        { "institution": "...", "degree": "...", "startDate": "...", "endDate": "...", "location": "...", "gpa": "..." }
    ],
    "projects": [
        { "name": "...", "description": "...", "technologies": "...", "role": "..." }
    ],
    "certifications": [
        { "name": "...", "issuer": "..." }
    ],
    "skills": "..." (comma separated string)
}

CRITICAL: 
- Return ONLY the JSON object.
- If a section is missing, return an empty array or empty string.
- In 'experience', the 'description' should be a single string summarizing achievements.
- 'skills' should be a comma-separated string of all skills found.`;

    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            systemInstruction: systemPrompt,
            generationConfig: { responseMimeType: "application/json", temperature: 0.1 }
        });

        console.log(`Sending text to Gemini for parsing (${rawText.length} chars)`);
        const response = await model.generateContent(`Raw Resume Text: ${rawText}`);
        let textResponse = response.response.text();
        console.log('Gemini raw response received');
        
        // Clean markdown if present
        textResponse = textResponse.replace(/```json\n?|```/g, '').trim();
        
        try {
            return JSON.parse(textResponse);
        } catch (jsonError) {
            console.error('Gemini JSON Parse Error:', jsonError);
            console.log('Raw text that failed parsing:', textResponse);
            throw new Error("AI returned invalid data format");
        }
    } catch (error) {
        console.error("Gemini Import Service Error:", error);
        throw error;
    }
}

module.exports = {
    generateRegionalCV,
    parseImportedResume
};
