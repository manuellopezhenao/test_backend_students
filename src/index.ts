
import * as express from 'express';

const app = express();

import { sequelize } from "./db/connection";
import {config} from "../configs/config";
import { studentRouter } from './routes/students';
import { routercoursestudent } from './routes/CourseStudents';
import { routercourse } from './routes/courses';

//importsequelize related models
import "./db/relations";


// Settings
app.set("port", config.PORT);


//static files
app.use(express.static("public"));


// Middlewares
app.use(express.json({ limit: "50mb" }));

import * as cors from'cors';
app.use(cors({origin:true,credentials: true}));

// Routes
app.use(routercoursestudent);
app.use(routercourse);
app.use(studentRouter);

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")} `);
});

dbConnection();

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

