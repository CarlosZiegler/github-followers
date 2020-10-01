const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/github-user-profile/users/:username", UserController.getUser);
routes.get("/github-user-profile/users/:username/followers", UserController.getAllFollowers);


module.exports = routes;
