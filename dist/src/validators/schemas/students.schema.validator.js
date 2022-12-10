"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableOrDisableStudentSchema = exports.deleteStudentSchema = exports.updateStudentSchema = exports.createStudentSchema = void 0;
const Joi = require("Joi");
const createStudentSchema = Joi.object({
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).required(),
    lv_id: Joi.number().required(),
    group: Joi.string().max(5).required(),
    email: Joi.string().max(100).required(),
    phone_number: Joi.string().max(100).required(),
    geolocation: Joi.string().max(200).required(),
    status: Joi.number().min(0).max(1).required(),
});
exports.createStudentSchema = createStudentSchema;
const updateStudentSchema = Joi.object({
    s_id: Joi.number().required(),
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).required(),
    lv_id: Joi.number().required(),
    group: Joi.string().max(5).required(),
    email: Joi.string().max(100).required(),
    phone_number: Joi.string().max(100).required(),
    geolocation: Joi.string().max(200).required(),
    status: Joi.number().min(0).max(1).required(),
});
exports.updateStudentSchema = updateStudentSchema;
const deleteStudentSchema = Joi.object({
    s_id: Joi.number().required(),
});
exports.deleteStudentSchema = deleteStudentSchema;
const enableOrDisableStudentSchema = Joi.object({
    s_id: Joi.number().required(),
    status: Joi.number().required().min(0).max(1),
});
exports.enableOrDisableStudentSchema = enableOrDisableStudentSchema;
//# sourceMappingURL=students.schema.validator.js.map