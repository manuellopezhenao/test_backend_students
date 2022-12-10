"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routercoursestudent = void 0;
const express = require("express");
const CourseStudents_1 = require("../controllers/CourseStudents");
const course_student_validate_1 = require("../validators/validates/course_student.validate");
const routercoursestudent = express.Router();
exports.routercoursestudent = routercoursestudent;
routercoursestudent.get("/coursestudents", CourseStudents_1.ListCourseStudents);
routercoursestudent.post("/linkcoursestudent", course_student_validate_1.validateCreateCourseStudent, CourseStudents_1.CreateCourseStudents);
routercoursestudent.delete("/unlinkcoursestudent/:cxs_id/:c_id/:s_id", CourseStudents_1.DeleteCourseStudents);
routercoursestudent.get("/searchstudentsbycourse/:id", CourseStudents_1.SearchCourseStudents);
//# sourceMappingURL=CourseStudents.js.map