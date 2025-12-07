import express from 'express';
import dotenv from 'dotenv';
import chatbotRoute from './routes/chatbotRoute.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/chatbot', chatbotRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});