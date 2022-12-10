"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchStudentByCourse = exports.DeleteCourseStudent = exports.UpdateCourseStudent = exports.CreateCourseStudent = exports.ListCourseStudent = void 0;
const sequelize_1 = require("sequelize");
const courses_1 = require("../models/courses");
const courses_x_student_1 = require("../models/courses_x_student");
const students_1 = require("../models/students");
const ListCourseStudent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudent = yield courses_x_student_1.TestCoursesXStudent.findAll({
            attributes: { include: [[sequelize_1.Sequelize.col("test_course.name"), "c_name"], [sequelize_1.Sequelize.col("test_student.first_name"), "s_name"]] },
            include: [
                { model: students_1.TestStudents, attributes: [] },
                { model: courses_1.TestCourses, attributes: [] },
            ],
        });
        return courseStudent;
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't list Course for students");
    }
});
exports.ListCourseStudent = ListCourseStudent;
const CreateCourseStudent = (courseStudent) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existCourseStudent = yield courses_x_student_1.TestCoursesXStudent.findOne({
            where: {
                c_id: courseStudent.c_id,
                s_id: courseStudent.s_id,
            },
        });
        if (existCourseStudent) {
            throw new Error("Course for student already exist");
        }
        const newCourseStudent = yield courses_x_student_1.TestCoursesXStudent.create({
            c_id: courseStudent.c_id,
            s_id: courseStudent.s_id,
        });
        return newCourseStudent;
    }
    catch (err) {
        if (err.message === "Course for student already exist") {
            throw new Error("Course for student already exist");
        }
        throw new Error("Can't create course for student");
    }
});
exports.CreateCourseStudent = CreateCourseStudent;
const UpdateCourseStudent = (courseStudent) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudentUpdate = yield courses_x_student_1.TestCoursesXStudent.update({
            c_id: courseStudent.c_id,
            s_id: courseStudent.s_id,
        }, {
            where: {
                cxs_id: courseStudent.cxs_id,
            },
        });
        return courseStudentUpdate;
    }
    catch (err) {
        throw new Error("Can't update course for student");
    }
});
exports.UpdateCourseStudent = UpdateCourseStudent;
const DeleteCourseStudent = (cxs_id, c_id, s_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (cxs_id) {
            const courseStudentDelete = yield courses_x_student_1.TestCoursesXStudent.destroy({
                where: {
                    cxs_id: cxs_id,
                },
            });
            return courseStudentDelete;
        }
        else {
            const courseStudentDelete = yield courses_x_student_1.TestCoursesXStudent.destroy({
                where: {
                    c_id: c_id,
                    s_id: s_id,
                },
            });
            return courseStudentDelete;
        }
    }
    catch (err) {
        throw new Error("Can't delete course for student");
    }
});
exports.DeleteCourseStudent = DeleteCourseStudent;
const SearchStudentByCourse = (c_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudent = yield courses_x_student_1.TestCoursesXStudent.findAll({
            attributes: { include: [[sequelize_1.Sequelize.col("test_student.first_name"), "first_name"]] },
            include: [
                { model: students_1.TestStudents, attributes: [] },
            ],
            where: {
                c_id: c_id,
            },
        });
        return courseStudent;
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't list Course for students");
    }
});
exports.SearchStudentByCourse = SearchStudentByCourse;
//# sourceMappingURL=course_x_student.js.map