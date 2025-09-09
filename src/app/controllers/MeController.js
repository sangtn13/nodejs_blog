import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../until/mongoose.js";
class MeController {
  // [GET] /me/stored/courses
    storedCourses(req, res, next) {
    const toastMessage = req.session.toastMessage;
    delete req.session.toastMessage;

    Promise.all([
      Course.find({}).sortable(res.locals._sort),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) => {
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
          toastMessage,
        });
      })
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    const toastMessage = req.session.toastMessage;
    delete req.session.toastMessage;
    Course.findWithDeleted({ deleted: true }).sortable(res.locals._sort)
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
          toastMessage,
        })
      )
      .catch(next);
  }
}

export default new MeController();
