import { CourseInterface } from "../../class/course";
import { TestCourses } from "../models/courses"


const ListCourses = async () => {
    try {
        const curses = await TestCourses.findAll();
        return curses;
    } catch (err) {
        throw new Error("Can't list courses");
    }
}

const CreateCourses = async (course: CourseInterface) => {
    try {
        const curse = await TestCourses.create({
            name: course.name,
            credits: course.credits
        });
        return curse;
    } catch (err) {
        throw new Error("Can't create course");
    }
}

const UpdateCourses = async (course: CourseInterface) => {
    try {
        console.log(course);
        const curse = await TestCourses.update({
            name: course.name,
            credits: course.credits
        }, {
            where: {
                c_id: course.c_id
            }
        });
        return curse;
    } catch (err) {
        console.log(err);
        throw new Error("Can't update course");
    }
}

const DeleteCourses = async (id: number) => {
    try {
        const curse = await TestCourses.destroy({
            where: {
                c_id: id
            }
        });
        return curse;
    } catch (err) {
        throw new Error("Can't delete course");
    }
}

const EnableOrDisableCourses = async (id: number, status: number) => {
    try {
        const curse = await TestCourses.update({
            status: status
        }, {
            where: {
                c_id: id
            }
        });
        return curse;
    } catch (err) {
        throw new Error("Can't enable or disable course");
    }
}



export { ListCourses, CreateCourses, UpdateCourses, DeleteCourses, EnableOrDisableCourses };