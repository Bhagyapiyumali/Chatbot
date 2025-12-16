import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const readJson = (filename) => {
  const p = path.join(__dirname, '..', 'data', filename);
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(raw);
};


export function handleChat(req, res) {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ reply: 'Please send a message.' });


    const text = message.toLowerCase();

    if (text.includes('places') || text.includes('visit') || text.includes('things to do')) {
        // try to find district
        const places = readJson('places.json');
        const district = detectDistrict(text, places);

        if (district) {
            const filtered = places.filter(p => p.district.toLowerCase() === district.toLowerCase());

            if (filtered.length) {
                const reply = formatPlacesReply(district, filtered);
                return res.json({ reply, cards: filtered });
            }else {
                return res.json({ reply: `I couldn't find places for ${district}.` });
             }
        }

        // Detect district name from the user input
        function detectDistrict(message, places) {
            const districts = [...new Set(places.map(p => p.district.toLowerCase()))];

            for (const d of districts) {
                if (message.includes(d)) {
                    return d;
                }
            }
            return null; // no district found
        }

        // Format chatbot reply for places list
        function formatPlacesReply(district, places) {
            let reply = `Here are some places to visit in ${district}:\n\n`;

            places.forEach((p, i) => {
                reply += `${i + 1}. ${p.name}\n`;
            });

            return reply;
        }

    }
    else if (text.includes('hotel') || text.includes('stay') || text.includes('accommodation')) {
        const hotels = readJson('hotels.json');
        const district = detectDistrict(text, hotels);
        if (district) {
            const filtered = hotels.filter(h => h.district.toLowerCase() === district.toLowerCase());
            if (filtered.length) {
                const reply = formatHotelsReply(district, filtered);
                return res.json({ reply, cards: filtered });
            } else {
                return res.json({ reply: `I couldn't find hotels for ${district}.` });
            }
        }

        // Format chatbot reply for hotels list
        function formatHotelsReply(district, hotels) {
            let reply = `Here are some hotels in ${district}:\n\n`;

            hotels.forEach((h, i) => {
                reply += `${i + 1}. ${h.name} (${h.price}) - Phone: ${h.phone}\n`;
            });

            return reply;
        }
    }
    else {
        return res.json({ reply: "Sorry, I didn't understand that. You can ask about places to visit or hotels to stay." });
    }   
}