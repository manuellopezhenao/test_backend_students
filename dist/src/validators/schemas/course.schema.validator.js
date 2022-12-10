"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableOrDisableCourseSchema = exports.deleteCourseSchema = exports.updateCourseSchema = exports.createCourseSchema = void 0;
const Joi = require("joi");
const createCourseSchema = Joi.object({
    name: Joi.string().max(100).required(),
    credits: Joi.number().required(),
});
exports.createCourseSchema = createCourseSchema;
const updateCourseSchema = Joi.object({
    c_id: Joi.number().required(),
    name: Joi.string().max(100).required(),
    credits: Joi.number().required(),
});
exports.updateCourseSchema = updateCourseSchema;
const deleteCourseSchema = Joi.object({
    c_id: Joi.number().required(),
});
exports.deleteCourseSchema = deleteCourseSchema;
const enableOrDisableCourseSchema = Joi.object({
    c_id: Joi.number().required(),
    status: Joi.number().required().min(0).max(1),
});
exports.enableOrDisableCourseSchema = enableOrDisableCourseSchema;
//# sourceMappingURL=course.schema.validator.js.map