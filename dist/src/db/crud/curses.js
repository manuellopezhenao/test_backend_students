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
exports.EnableOrDisableCourses = exports.DeleteCourses = exports.UpdateCourses = exports.CreateCourses = exports.ListCourses = void 0;
const courses_1 = require("../models/courses");
const ListCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curses = yield courses_1.TestCourses.findAll();
        return curses;
    }
    catch (err) {
        throw new Error("Can't list courses");
    }
});
exports.ListCourses = ListCourses;
const CreateCourses = (course) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield courses_1.TestCourses.create({
            name: course.name,
            credits: course.credits
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't create course");
    }
});
exports.CreateCourses = CreateCourses;
const UpdateCourses = (course) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(course);
        const curse = yield courses_1.TestCourses.update({
            name: course.name,
            credits: course.credits
        }, {
            where: {
                c_id: course.c_id
            }
        });
        return curse;
    }
    catch (err) {
        console.log(err);
        throw new Error("Can't update course");
    }
});
exports.UpdateCourses = UpdateCourses;
const DeleteCourses = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield courses_1.TestCourses.destroy({
            where: {
                c_id: id
            }
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't delete course");
    }
});
exports.DeleteCourses = DeleteCourses;
const EnableOrDisableCourses = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const curse = yield courses_1.TestCourses.update({
            status: status
        }, {
            where: {
                c_id: id
            }
        });
        return curse;
    }
    catch (err) {
        throw new Error("Can't enable or disable course");
    }
});
exports.EnableOrDisableCourses = EnableOrDisableCourses;
//# sourceMappingURL=curses.js.map