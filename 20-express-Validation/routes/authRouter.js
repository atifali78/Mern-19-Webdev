var routes = require("express").Router()

const {LogIn, LogOut} = require("../controllers/authController")

routes.get("/login", LogIn)
routes.get("/logout", LogOut)

module.exports = routes;