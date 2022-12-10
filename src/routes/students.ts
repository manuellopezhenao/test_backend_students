import * as express from "express";
import {
  CreateStudent,
  DeleteStudent,
  enableOrDisableStudent,
  ListStudent,
  UpdateStudent,
} from "../controllers/students";
import {
  validateCreateStudent,
  validateDeleteStudent,
  validateEnableOrDisableStudent,
  validateUpdateStudent,
} from "../validators/validates/student.validate";

const studentRouter = express.Router();

studentRouter.get("/students", ListStudent);
studentRouter.post("/students", validateCreateStudent, CreateStudent);
studentRouter.put("/students", validateUpdateStudent, UpdateStudent);
studentRouter.delete("/students/:id", DeleteStudent);
studentRouter.post("/students/enableorDisable", validateEnableOrDisableStudent, enableOrDisableStudent);

export {studentRouter};
