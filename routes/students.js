// todo imports libarryes //
import { Router } from "express";

// todo export more then one //
import { students, name } from "../database/UsersArray.js";

const studentroute = new Router();

const studentsfunction = (request, response) => {
  response.render("./students/studentindex", {
    /*layout: false,*/ students,
    name,
  });
};

const showstudents = (request, response) => {
  const id = request.params.id;

  const student = students.find((item) => {
    return item.id == id;
  });

  console.log(student);

  response.render("students/students", { /*layout: false,*/ student });
};

// todo route //

studentroute.get("/", studentsfunction);

studentroute.get("/:id", showstudents);

export default studentroute;
