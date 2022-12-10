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
exports.enableOrDisableCourse = exports.DeleteCourse = exports.UpdateCourse = exports.CreateCourse = exports.ListCourse = void 0;
const curses_1 = require("../db/crud/curses");
const ListCourse = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield (0, curses_1.ListCourses)();
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courses,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: err.message,
        });
    }
});
exports.ListCourse = ListCourse;
const CreateCourse = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, credits } = Req.body;
        const courses = yield (0, curses_1.CreateCourses)({ name, credits });
        res.status(200).json({
            success: true,
            mgs: "Course created",
            data: courses,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: err.message,
        });
    }
});
exports.CreateCourse = CreateCourse;
const UpdateCourse = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { c_id, name, credits } = Req.body;
        const newCourse = yield (0, curses_1.UpdateCourses)({ c_id: c_id, name, credits });
        if (newCourse[0] === 0) {
            res.status(400).json({
                success: false,
                mgs: "Course not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            mgs: "Success Course updated",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: err.message,
        });
    }
});
exports.UpdateCourse = UpdateCourse;
const DeleteCourse = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c_id = Number(Req.params.id);
        const courses = yield (0, curses_1.DeleteCourses)(c_id);
        if (courses === 0) {
            res.status(400).json({
                success: false,
                mgs: "Course not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            mgs: "Course deleted",
        });
    }
    catch (err) {
        res.status(500).json({
            estatus: 500,
            error: err.message,
        });
    }
});
exports.DeleteCourse = DeleteCourse;
const enableOrDisableCourse = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { c_id, status } = Req.body;
        yield (0, curses_1.EnableOrDisableCourses)(c_id, status);
        res.status(200).json({
            success: true,
            mgs: "Success Course updated",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            mgs: err.message
        });
    }
});
exports.enableOrDisableCourse = enableOrDisableCourse;
//# sourceMappingURL=courses.js.map