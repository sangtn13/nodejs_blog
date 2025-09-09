import express from "express";
import morgan from "morgan";
import handlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";
import db from "./config/db/index.js";
import methodOverride from "method-override";
import session from "express-session";

// Connect to database
db.connect();

const app = express();
const port = 3000;

// Fix __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTTP logger
app.use(morgan("combined")); // log all requests to the console

app.use(express.urlencoded({ extended: true })); // to parse form data in POST requests
app.use(express.json()); // to parse JSON bodies
app.use(methodOverride("_method")); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // for development
}));
app.use(express.static(path.join(__dirname, "public"))); // serve static files from 'public' directory

// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      inc: function (value) {
        return parseInt(value) + 1;
      },
      formatDate: function (date) {
        if (!date) return "";
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, "0");
        return `${pad(d.getDate())}/${pad(
          d.getMonth() + 1
        )}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
          d.getSeconds()
        )}`;
      },
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes
route(app);

// query parameters is req.query, form data in req.body
// 127.0.0.1 -> localhost
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
