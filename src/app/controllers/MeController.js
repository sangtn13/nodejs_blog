import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../until/mongoose.js";
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render("me/stored-courses", {
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render("me/trash-courses", {
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }
}

export default new MeController();
