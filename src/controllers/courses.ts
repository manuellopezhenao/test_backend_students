import { Request, Response } from "express";
import {
  CreateCourses,
  DeleteCourses,
  EnableOrDisableCourses,
  ListCourses,
  UpdateCourses,
} from "../db/crud/curses";

const ListCourse = async (_: Request, res: Response) => {
  try {
    const courses = await ListCourses();
    res.status(200).json({
      success: true,
      mgs: "Success",
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message,
    });
  }
};

const CreateCourse = async (Req: Request, res: Response) => {
  try {
    const { name, credits } = Req.body;
    const courses = await CreateCourses({ name, credits });
    res.status(200).json({
      success: true,
      mgs: "Course created",
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message,
    });
  }
};

const UpdateCourse = async (Req: Request, res: Response) => {
  try {
    const { c_id, name, credits } = Req.body;
    const newCourse = await UpdateCourses({ c_id: c_id, name, credits });

    if (newCourse[0] === 0) {
      res.status(400).json({
        success: false,
        mgs: "Course not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      mgs: "Success Course updated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message,
    });
  }
};

const DeleteCourse = async (Req: Request, res: Response) => {
  try {
    const  c_id: number  = Number(Req.params.id);
    const courses = await DeleteCourses(c_id);

    if (courses === 0) {
      res.status(400).json({
        success: false,
        mgs: "Course not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      mgs: "Course deleted",
    });
  } catch (err) {
    res.status(500).json({
      estatus: 500,
      error: err.message,
    });
  }
};

const enableOrDisableCourse = async (Req: Request, res: Response) => {
  try {
    const { c_id, status } = Req.body;
    await EnableOrDisableCourses(c_id, status);
    
    res.status(200).json({
      success: true,
      mgs: "Success Course updated",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      mgs: err.message
    });
  }
}

export {
  ListCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  enableOrDisableCourse,
};