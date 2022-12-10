"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseStudentSchema = exports.createCourseStudentSchema = void 0;
const Joi = require("joi");
const createCourseStudentSchema = Joi.object({
    s_id: Joi.number().required(),
    c_id: Joi.number().required(),
});
exports.createCourseStudentSchema = createCourseStudentSchema;
const deleteCourseStudentSchema = Joi.object({
    cxs_id: Joi.number().optional(),
    c_id: Joi.number().when("cxs_id", {
        is: Joi.exist(),
        then: Joi.optional(),
        otherwise: Joi.required(),
    }),
    s_id: Joi.number().when("cxs_id", {
        is: Joi.exist(),
        then: Joi.optional(),
        otherwise: Joi.required(),
    }),
});
exports.deleteCourseStudentSchema = deleteCourseStudentSchema;
//# sourceMappingURL=course_students.schema.validator.js.map