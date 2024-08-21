const sequelize = require("../bin/DBConnection"); 
const roles = require("./definitions/roles");
const users = require("./definitions/users")     


const models = { users, roles };
                          //-step-3 yaha pr kin 2 table ky darmiyan relation karna ha  - users and role 
                          // parent kon ha 1 kon ha role
                          // parent upr ay ga or child nichy parent ky sath hasmany or child ky sath belogsto
 roles.hasMany(users, {foreignKey: "roleId"});                 // one to many realtion "role have many users brackets ma users and forenKey ha "
 users.belongsTo(roles, {foreignKey: "roleId"});
                          // step-4 server run error occur  hum ny database ma jo phlay user create kiya ha waha allow null kiya ha its means user ky against kya role decide ho ga kuch bhi nahi to ma is ki default value null chor data hu , hum delte hi kr daty han or default value bhi nahi daty
                          // step 5 hamy enum kr sath aunique ki zarurat nahi ha
                          // step 6 send request create from postman error ocurr userId can't be null

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};