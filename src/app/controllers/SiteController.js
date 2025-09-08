import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../until/mongoose.js";
class SiteController {
  // [GET] /
  // filepath: d:\NodeJS\blog\src\app\controllers\SiteController.js
async index(req, res) {
  try {
    const courses = await Course.find({});
    res.render('home', { courses: multipleMongooseToObject(courses) });
  } catch (err) {
    res.status(400).json({ error: "Bad request!" });
  }
}

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();