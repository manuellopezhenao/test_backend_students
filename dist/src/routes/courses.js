"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routercourse = void 0;
const express = require("express");
const courses_1 = require("../controllers/courses");
const course_validate_1 = require("../validators/validates/course.validate");
const routercourse = express.Router();
exports.routercourse = routercourse;
routercourse.get("/courses", courses_1.ListCourse);
routercourse.post("/courses", course_validate_1.validateCreateCourse, courses_1.CreateCourse);
routercourse.put("/courses", course_validate_1.validateUpdateCourse, courses_1.UpdateCourse);
routercourse.delete("/courses/:id", courses_1.DeleteCourse);
routercourse.post("/courses/enableorDisable", course_validate_1.validateEnableOrDisableCourse, courses_1.enableOrDisableCourse);
//# sourceMappingURL=courses.js.map