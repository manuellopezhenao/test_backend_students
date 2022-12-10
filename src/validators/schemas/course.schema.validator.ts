import * as Joi from "joi";

const createCourseSchema = Joi.object({
  name: Joi.string().max(100).required(),
  credits: Joi.number().required(),
});

const updateCourseSchema = Joi.object({
  c_id: Joi.number().required(),
  name: Joi.string().max(100).required(),
  credits: Joi.number().required(),
});

const deleteCourseSchema = Joi.object({
  c_id: Joi.number().required(),
});

const enableOrDisableCourseSchema = Joi.object({
  c_id: Joi.number().required(),
  status: Joi.number().required().min(0).max(1),
});

export { createCourseSchema, updateCourseSchema, deleteCourseSchema, enableOrDisableCourseSchema };
