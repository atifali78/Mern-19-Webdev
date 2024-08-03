var routes = require("express").Router();

routes.get("/create", (req, res)=> {
 return res.send("CREATE USER API")
});
routes.get("/delete", (req, res)=> {
 return res.send("DELETE USER API")
});
routes.get("/update", (req, res)=> {
 return res.send("UPDATE USER API")
});
routes.get("/patch", (req, res)=> {
 return res.send("PATCH USER API")
});

module.exports = routes;
