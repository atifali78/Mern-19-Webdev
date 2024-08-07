var routes = require("express").Router();

const{createADM, getADM, deleteADM} = require("../controllers/adminController")
const{createStudentSchema} = require("../validations/user")

routes.post("/create-adm", createStudentSchema, createADM);
routes.get("/get-adm", getADM);
routes.delete("/del-adm", deleteADM);

module.exports = routes;



