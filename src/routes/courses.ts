import * as express from "express";
import { ListCourse, CreateCourse, UpdateCourse, DeleteCourse, enableOrDisableCourse } from "../controllers/courses";

import {
  validateCreateCourse,
  validateEnableOrDisableCourse,
  validateUpdateCourse,
} from "../validators/validates/course.validate";

const routercourse = express.Router();

routercourse.get("/courses", ListCourse);
routercourse.post("/courses", validateCreateCourse, CreateCourse);
routercourse.put("/courses", validateUpdateCourse, UpdateCourse);
routercourse.delete("/courses/:id", DeleteCourse);
routercourse.post("/courses/enableorDisable", validateEnableOrDisableCourse, enableOrDisableCourse);

export {routercourse};
