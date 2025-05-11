import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get('/api/', (req, res) => {
    res.send('Hello API');
});

app.get('/api/artists', async (req, res) => {
    res.send(await db.collection('artists').find().toArray());
});

app.get('/api/songs', async (req, res) => {
        res.send(await db.collection('songs').find().toArray());

});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});