import fs from 'fs';
import path from 'path';


const readJson = (filename) => {
const p = path.join(process.cwd(), 'backend', 'data', filename);
const raw = fs.readFileSync(p, 'utf8');
return JSON.parse(raw);
};