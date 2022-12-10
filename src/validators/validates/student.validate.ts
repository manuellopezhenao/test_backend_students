import { Request, Response, NextFunction } from "express";
import {
  createStudentSchema,
  deleteStudentSchema,
  enableOrDisableStudentSchema,
  updateStudentSchema,
} from "../schemas/students.schema.validator";
import { ValidaSchema } from "../../helpers/validate_result";

const validateCreateStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, createStudentSchema);

const validateUpdateStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, updateStudentSchema);

const validateDeleteStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, deleteStudentSchema);

const validateEnableOrDisableStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => ValidaSchema(req, res, next, enableOrDisableStudentSchema);

export { validateCreateStudent, validateUpdateStudent, validateDeleteStudent, validateEnableOrDisableStudent };