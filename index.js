// const express = require('express');

// todo imports libarryes //

import express from "express";

import { engine } from "express-handlebars";

// todo export only one //
// ? route student //
import studentroute from "./routes/students.js";
// ? route users //
import usersroute from "./routes/users.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/students", studentroute);
app.use("/users", usersroute);

// ! port run
app.listen(5000);
