import fs from 'fs';
import path from 'path';


const readJson = (filename) => {
const p = path.join(process.cwd(), 'backend', 'data', filename);
const raw = fs.readFileSync(p, 'utf8');
return JSON.parse(raw);
};

export function handleChat(req, res) {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ reply: 'Please send a message.' });


    const text = message.toLowerCase();
}