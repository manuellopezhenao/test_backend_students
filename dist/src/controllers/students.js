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
exports.enableOrDisableStudent = exports.DeleteStudent = exports.UpdateStudent = exports.CreateStudent = exports.ListStudent = void 0;
const students_1 = require("../db/crud/students");
const ListStudent = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, students_1.ListStudents)();
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: students
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err.message
        });
    }
});
exports.ListStudent = ListStudent;
const CreateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const newStudent = yield (0, students_1.CreateStudents)(student);
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: newStudent
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err.message
        });
    }
});
exports.CreateStudent = CreateStudent;
const UpdateStudent = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = Req.body;
        yield (0, students_1.UpdateStudents)(student);
        res.status(200).json({
            success: true,
            mgs: "Success Student Updated",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err.message
        });
    }
});
exports.UpdateStudent = UpdateStudent;
const DeleteStudent = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const s_id = Number(Req.params.id);
        const student = yield (0, students_1.DeleteStudents)(s_id);
        if (student === 0) {
            res.status(400).json({
                success: false,
                mgs: "Student not found",
            });
            return;
        }
        if (student === 1) {
            res.status(200).json({
                success: true,
                mgs: "success Student deleted",
            });
            return;
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err.message
        });
    }
});
exports.DeleteStudent = DeleteStudent;
const enableOrDisableStudent = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { s_id, status } = Req.body;
        yield (0, students_1.enableOrDisableStudents)(s_id, status);
        res.status(200).json({
            success: true,
            mgs: "Success Student Updated",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err.message
        });
    }
});
exports.enableOrDisableStudent = enableOrDisableStudent;
//# sourceMappingURL=students.js.map