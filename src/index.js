import express from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Fix __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// root route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// 127.0.0.1 -> localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));