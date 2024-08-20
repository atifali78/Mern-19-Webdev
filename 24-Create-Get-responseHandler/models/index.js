const sequelize = require("../bin/DBConnection"); // DBConnection
const roles = require("./definitions/roles");
const users = require("./definitions/users")     // user table comes

// const model object create  ab ap ky jitny bhi model ho gy wo is object ma ay gy 
const models = { users, roles };

// db object create and empty
const db = {};


// in objects how to create new key (if the key already exist its update if not it created)
db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};