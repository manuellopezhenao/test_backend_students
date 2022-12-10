import { Request, Response, NextFunction } from "express";
import {
  createCourseSchema,
  deleteCourseSchema,
  enableOrDisableCourseSchema,
  updateCourseSchema,
} from "../schemas/course.schema.validator";
import { ValidaSchema } from "../../helpers/validate_result";

const validateCreateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, createCourseSchema);

const validateUpdateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, updateCourseSchema);

const validateDeleteCourse = (
  req: Request,
  res: Response,
  
  next: NextFunction
) => ValidaSchema(req, res, next, deleteCourseSchema);

const validateEnableOrDisableCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, enableOrDisableCourseSchema);


export { validateCreateCourse, validateUpdateCourse, validateDeleteCourse, validateEnableOrDisableCourse };
