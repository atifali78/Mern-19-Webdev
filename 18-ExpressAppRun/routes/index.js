var routes = require('express').Router();

/* GET home page. */
routes.get('/home', (req, res) => {
   res.send("home page created")
});

module.exports = routes;
