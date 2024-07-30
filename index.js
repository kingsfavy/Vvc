
import express from 'express';
import blogPosts from './blogPosts.js';
import path from 'path';
import url from 'url';
import cors from 'cors';
const app = express();

//app.use(cors({ origin: 'https://kingsfavy.github.io' }));

app.use(express.static('public'));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('/api/blog-posts', (req, res) => {
    res.json(blogPosts);
});

