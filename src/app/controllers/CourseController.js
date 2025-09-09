import mongoose from "mongoose";
import Course from "../models/Course.js";
import { mongooseToObject } from "../../until/mongoose.js";
class CourseController {
  // [GET] /show
  show(req, res, next) {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).render("404");
    }
    Course.findOne({ _id })
      .then((course) => {
        if (!course) {
          return res.status(404).render("404");
        }
        res.render("courses/show", {
          courses: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /store
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        req.session.toastMessage = {
          type: "success",
          message: "Khóa học đã được tạo thành công!",
        };
        res.redirect("/me/stored/courses");
      })
      .catch(() => {
        req.session.toastMessage = {
          type: "error",
          message: "Có lỗi xảy ra khi tạo khóa học!",
        };
        res.redirect("/courses/create");
      });
  }

  // [GET] /:id/edit
  edit(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).render("404");
    }
    Course.findById(id)
      .then((course) => {
        if (!course) {
          return res.status(404).render("404");
        }
        res.render("courses/edit", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [PUT] /:id
  update(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).render("404");
    }
    const formData = req.body;
    Course.updateOne({ _id: id }, formData)
      .then(() => {
        req.session.toastMessage = {
          type: "success",
          message: "Khóa học đã được cập nhật thành công!",
        };
        res.redirect("/me/stored/courses");
      })
      .catch(() => {
        req.session.toastMessage = {
          type: "error",
          message: "Có lỗi xảy ra khi cập nhật khóa học!",
        };
        res.redirect(`/courses/${id}/edit`);
      });
  }

  // [DELETE] /:id
  delete(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).render("404");
    }
    Course.delete({ _id: id })
      .then(() => {
        req.session.toastMessage = {
          type: "success",
          message: "Khóa học đã được xóa vào thùng rác thành công!",
        };
        res.redirect("/me/stored/courses");
      })
      .catch(() => {
        req.session.toastMessage = {
          type: "error",
          message: "Có lỗi xảy ra khi xóa khóa học vào thùng rác!",
        };
        res.redirect("/me/stored/courses");
      });
  }

  // [PATCH] /:id/restore
  restore(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).render("404");
    }
    Course.restore({ _id: id })
      .then(() => {
        req.session.toastMessage = {
          type: "success",
          message: "Khóa học đã được khôi phục thành công!",
        };
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }

  // [POST] /bulk-action
  bulkAction(req, res, next) {
    const { action, courseIds } = req.body;
    if (!Array.isArray(courseIds) || courseIds.length === 0) {
      return res.status(400).send("No courses selected");
    }
    const validCourseIds = courseIds.filter((id) =>
      mongoose.Types.ObjectId.isValid(id)
    );
    if (validCourseIds.length === 0) {
      return res.status(400).send("No valid course IDs provided");
    }
    switch (action) {
      case "delete":
        Course.delete({ _id: { $in: validCourseIds } })
          .then(() => {
            req.session.toastMessage = {
              type: "success",
              message: `Đã xóa ${validCourseIds.length} khóa học vào thùng rác thành công!`,
            };
            res.redirect("/me/stored/courses");
          })
          .catch(() => {
            req.session.toastMessage = {
              type: "error",
              message: "Có lỗi xảy ra khi xóa khóa học vào thùng rác!",
            };
            res.redirect("/me/stored/courses");
          });
        break;
      case "restore":
        Course.restore({ _id: { $in: validCourseIds } })
          .then(() => {
            req.session.toastMessage = {
              type: "success",
              message: `Đã khôi phục ${validCourseIds.length} khóa học thành công!`,
            };
            res.redirect("/me/stored/courses");
          })
          .catch(() => {
            req.session.toastMessage = {
              type: "error",
              message: "Có lỗi xảy ra khi khôi phục khóa học!",
            };
            res.redirect("/me/stored/courses");
          });
        break;
      case "force-delete":
        Course.deleteMany({ _id: { $in: validCourseIds } })
          .then(() => {
            req.session.toastMessage = {
              type: "success",
              message: `Đã xóa ${validCourseIds.length} khóa học thành công!`,
            };
            res.redirect("/me/trash/courses");
          })
          .catch(() => {
            req.session.toastMessage = {
              type: "error",
              message: "Có lỗi xảy ra khi xóa khóa học vào thùng rác!",
            };
            res.redirect("/me/trash/courses");
          });
        break;
      default:
        res.status(400).send("Invalid action");
    }
  }

  // [DELETE] /:id/force
  forceDelete(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).render("404");
    }
    Course.deleteMany({ _id: id })
      .then(() => {
        req.session.toastMessage = {
          type: "success",
          message: "Khóa học đã được xóa vĩnh viễn thành công!",
        };
        res.redirect("/me/trash/courses");
      })
      .catch(() => {
        req.session.toastMessage = {
          type: "error",
          message: "Có lỗi xảy ra khi xóa khóa học vĩnh viễn!",
        };
        res.redirect("/me/trash/courses");
      });
  }
}

export default new CourseController();
