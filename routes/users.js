import { Router } from "express";

const usersroute = new Router();

// todo route //

usersroute.get("/", (request, response) => {
  response.render("users/users");
});
usersroute.get("/:id", (request, response) => {});

const shoe = (req, res) => {};
export default usersroute;
