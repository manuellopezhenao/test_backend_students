import * as express from "express";
import {
  CreateCourseStudents,
  DeleteCourseStudents,
  ListCourseStudents,
  SearchCourseStudents,
} from "../controllers/CourseStudents";
import {
  validateCreateCourseStudent,
} from "../validators/validates/course_student.validate";

const routercoursestudent = express.Router();

routercoursestudent.get("/coursestudents", ListCourseStudents);
routercoursestudent.post(
  "/linkcoursestudent",
  validateCreateCourseStudent,
  CreateCourseStudents
);

routercoursestudent.delete("/unlinkcoursestudent/:cxs_id/:c_id/:s_id", DeleteCourseStudents);

routercoursestudent.get("/searchstudentsbycourse/:id", SearchCourseStudents);

export {routercoursestudent};
