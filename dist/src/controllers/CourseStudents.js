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
exports.SearchCourseStudents = exports.DeleteCourseStudents = exports.CreateCourseStudents = exports.ListCourseStudents = void 0;
const course_x_student_1 = require("../db/crud/course_x_student");
const ListCourseStudents = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudents = yield (0, course_x_student_1.ListCourseStudent)();
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courseStudents
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
});
exports.ListCourseStudents = ListCourseStudents;
const CreateCourseStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseStudent = req.body;
        const newcourseStudent = yield (0, course_x_student_1.CreateCourseStudent)(courseStudent);
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: newcourseStudent
        });
    }
    catch (err) {
        if (err.message === "Course for student already exist") {
            res.status(200).json({
                success: false,
                mgs: err.message,
            });
            return;
        }
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
});
exports.CreateCourseStudents = CreateCourseStudents;
const DeleteCourseStudents = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxs_id, c_id, s_id } = Req.params;
        const courseStudent = yield (0, course_x_student_1.DeleteCourseStudent)(Number(cxs_id) || 0, Number(c_id) || 0, Number(s_id) || 0);
        if (courseStudent === 0) {
            res.status(400).json({
                success: false,
                mgs: "Course for student not found",
            });
            return;
        }
        if (courseStudent === 1) {
            res.status(200).json({
                success: true,
                mgs: "Course for student deleted",
            });
            return;
        }
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
});
exports.DeleteCourseStudents = DeleteCourseStudents;
const SearchCourseStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const courseStudent = yield (0, course_x_student_1.SearchStudentByCourse)(Number(id));
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courseStudent
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
});
exports.SearchCourseStudents = SearchCourseStudents;
//# sourceMappingURL=CourseStudents.js.map