import { Request, Response } from 'express';
import { CourseStudentInterface } from '../class/courses_x_students';
import { CreateCourseStudent, DeleteCourseStudent, ListCourseStudent, SearchStudentByCourse, UpdateCourseStudent } from '../db/crud/course_x_student';

const ListCourseStudents = async (_: Request, res: Response) => {
    try {
        const courseStudents = await ListCourseStudent();
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courseStudents
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
}

const CreateCourseStudents = async (req: Request, res: Response) => {
    try {
        const courseStudent: CourseStudentInterface = req.body;
        const newcourseStudent = await CreateCourseStudent(courseStudent);
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: newcourseStudent
        });
    } catch (err) {
        if (err.message === "Course for student already exist") {
            res.status(200).json({
                success: false,
                mgs: err.message,
            });
            return;
        }
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
}


const DeleteCourseStudents = async (Req: Request, res: Response) => {
    try {
        const { cxs_id, c_id, s_id } = Req.params;
        const courseStudent = await DeleteCourseStudent(Number(cxs_id) || 0, Number(c_id) || 0, Number(s_id) || 0);

        if (courseStudent === 0) {
            res.status(400).json({
                success: false,
                mgs: "Course for student not found",
            });
            return;
        }

        if (courseStudent === 1) {
            res.status(200).json({
                success: true,
                mgs: "Course for student deleted",
            });
            return;
        }

    } catch (err) {


        

        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
}

const SearchCourseStudents = async (req: Request, res: Response) => {
    try {
        const {id } = req.params;
        const courseStudent = await SearchStudentByCourse(Number(id));
        res.status(200).json({
            success: true,
            mgs: "Success",
            data: courseStudent
        });
    } catch (err) {
        res.status(500).json({
            estatus: 500,
            err: err.message
        });
    }
}




export {
    ListCourseStudents,
    CreateCourseStudents,
    DeleteCourseStudents,
    SearchCourseStudents
}