import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Gay');
});

app.get('/artists', async (req, res) => {
    res.send(await db.collection('artists').find().toArray());
});

app.get('/songs', async (req, res) => {
        res.send(await db.collection('songs').find().toArray());

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});