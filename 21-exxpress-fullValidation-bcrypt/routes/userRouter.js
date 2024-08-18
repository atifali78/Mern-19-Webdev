var routes = require("express").Router()
let {createUser, getAllUser, getSpecificUser,delUser} = require("../controllers/userController")
let {createUserSchema} = require("../validations/userValidations") // validation

routes.post("/create",createUserSchema ,createUser)
routes.get("/getAllUser", getAllUser)
routes.get("/getSpUser", getSpecificUser)
routes.delete("/delUser", delUser)

module.exports = routes;