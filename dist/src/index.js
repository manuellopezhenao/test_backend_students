"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const connection_1 = require("./db/connection");
const config_1 = require("../configs/config");
const students_1 = require("./routes/students");
const CourseStudents_1 = require("./routes/CourseStudents");
const courses_1 = require("./routes/courses");
//importsequelize related models
require("./db/relations");
// Settings
app.set("port", config_1.config.PORT);
//static files
app.use(express.static("public"));
// Middlewares
app.use(express.json({ limit: "50mb" }));
const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
// Routes
app.use(CourseStudents_1.routercoursestudent);
app.use(courses_1.routercourse);
app.use(students_1.studentRouter);
// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")} `);
});
dbConnection();
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection_1.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    });
}
//# sourceMappingURL=index.js.map