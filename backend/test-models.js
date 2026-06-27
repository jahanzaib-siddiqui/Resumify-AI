const dotenv = require('dotenv');
dotenv.config();

async function run() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        if (data.models) {
            console.log("AVAILABLE MODELS:\n", data.models.map(m => `${m.name} - generateContent: ${m.supportedGenerationMethods.includes('generateContent')}`).join('\n'));
        } else {
            console.log("Error fetching models:", data);
        }
    } catch(e) {
        console.error(e);
    }
}
run();
