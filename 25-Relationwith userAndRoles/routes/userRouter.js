var routes = require("express").Router();
let {userCreate, getAllCreateUser, userSpGet, delUser} = require("../controllers/userController")
let {createSchema} = require("../validations/userValidation") // validation

routes.post("/create-user", createSchema ,userCreate)
routes.get("/getUser", getAllCreateUser)
routes.get("/SpUser",userSpGet )
routes.delete("/del-user", delUser)

module.exports =  routes;