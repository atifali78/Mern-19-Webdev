var routes = require("express").Router();


const {create, getAll} = require("../controller/userController");
routes.get("/get-all-users", getAll)
routes.post("/create-user", create)

module.exports = routes;
