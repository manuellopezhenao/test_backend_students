"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express = require("express");
const students_1 = require("../controllers/students");
const student_validate_1 = require("../validators/validates/student.validate");
const studentRouter = express.Router();
exports.studentRouter = studentRouter;
studentRouter.get("/students", students_1.ListStudent);
studentRouter.post("/students", student_validate_1.validateCreateStudent, students_1.CreateStudent);
studentRouter.put("/students", student_validate_1.validateUpdateStudent, students_1.UpdateStudent);
studentRouter.delete("/students/:id", students_1.DeleteStudent);
studentRouter.post("/students/enableorDisable", student_validate_1.validateEnableOrDisableStudent, students_1.enableOrDisableStudent);
//# sourceMappingURL=students.js.map