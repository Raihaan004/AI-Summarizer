require('dotenv').config(); // This must be at the top
const express = require('express');
const Groq = require('groq-sdk');
const cors = require('cors');

const app = express();
const port = 3000;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // Remember to use your API key

app.use(cors());
app.use(express.json());

// Endpoint for the summary
app.post('/generate-summary', async (req, res) => {
    const { transcript, prompt } = req.body;
    if (!transcript || !prompt) {
        return res.status(400).json({ error: 'Transcript and prompt are required.' });
    }

    try {
        // This new prompt is very strict about the output format.
        const fullPrompt = `
            You are an AI assistant that summarizes transcripts into plain text.
            CRITICAL INSTRUCTION: Your entire response must be plain text. Do NOT use any Markdown formatting.
            Specifically, you must not use double asterisks (**) for bolding.
            If the user asks for a list, format each item as a bullet point, starting with a hyphen (-).

            User's Request: "${prompt}"

            Transcript to summarize:
            ---
            ${transcript}
            ---
        `;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: fullPrompt }],
            model: 'llama3-8b-8192',
        });

        const summary = chatCompletion.choices[0]?.message?.content || 'Could not generate summary.';
        res.status(200).json({ summary: summary.trim() });

    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'An error occurred while communicating with the AI service.' });
    }
});

// Endpoint for the analysis
app.post('/generate-analysis', async (req, res) => {
    const { transcript } = req.body;
    if (!transcript) {
        return res.status(400).json({ error: 'Transcript is required for analysis.' });
    }

    try {
        const analysisPrompt = `
            Analyze the following meeting transcript and provide the following information in a JSON object:
            1. "sentiment": (string) The overall sentiment of the meeting (e.g., "Positive", "Neutral", "Negative").
            2. "key_topics": (array of strings) A list of the main topics discussed.
            3. "top_contributor": (string) The name of the person who spoke the most or contributed the key ideas.

            Transcript:
            ---
            ${transcript}
            ---

            Provide only the JSON object as your response.
        `;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: analysisPrompt }],
            model: 'llama3-8b-8192',
            response_format: { type: "json_object" },
        });
        
        const analysis = JSON.parse(chatCompletion.choices[0]?.message?.content || '{}');
        res.status(200).json({ analysis });

    } catch (error) {
        console.error('Error calling Groq API for analysis:', error);
        res.status(500).json({ error: 'An error occurred during analysis.' });
    }
});


app.listen(port, () => {
    console.log(`Backend server is running successfully on http://localhost:${port}`);
});