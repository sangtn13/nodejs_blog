import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../until/mongoose.js";
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {

    let courseQuery = Course.find({});
    if (res.locals._sort.enabled) {
      const sort = {};
      sort[res.locals._sort.column] = res.locals._sort.type === "asc" ? 1 : -1;
      courseQuery = courseQuery.sort(sort);
    }

    const toastMessage = req.session.toastMessage;
    delete req.session.toastMessage;

    Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
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
    Course.findWithDeleted({ deleted: true })
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
