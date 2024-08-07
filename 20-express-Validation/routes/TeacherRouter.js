var routes = require("express").Router();

const{getTEC, createTEC, deleteTEC} = require("../controllers/teacherController")

routes.post("/create-tec", createTEC);
routes.get("/get-tec", getTEC);
routes.delete("/del-tec", deleteTEC);

module.exports = routes;



