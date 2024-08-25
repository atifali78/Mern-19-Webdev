const sequelize = require("../bin/DBConnection");
const roles = require("./definitions/roles");
const users = require("./definitions/users")


const models = { users, roles };

roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });


const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };