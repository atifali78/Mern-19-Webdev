var routes = require("express").Router();

const { createSTD, getSTD, deleteSTD } = require("../controllers/studentController");
const {createStudentSchema} = require("../validations/user")

routes.post("/create-std",createStudentSchema, createSTD);
routes.get("/get-std", getSTD);
routes.delete("/del-std", deleteSTD);

module.exports = routes;



