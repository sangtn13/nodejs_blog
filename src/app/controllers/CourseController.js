import Course from "../models/Course.js";
import { mongooseToObject } from "../../until/mongoose.js";
class CourseController {
  // [GET] /show
  show(req, res, next) {
    Course.findOne({ _id: req.params._id })
      .then((courses) => {
        res.render("courses/show", {
          courses: mongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

export default new CourseController();