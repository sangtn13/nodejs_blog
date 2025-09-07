// install npm express, npm nodemon
import express from 'express';
const app = express();
const port = 3000;

// root route
app.get('/', (req, res) => res.send('Hello World!'));

// 127.0.0.1 -> localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));