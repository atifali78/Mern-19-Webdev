const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBConnection")
const { roles } = require("./roles")   // step2
const { v4: uuid } = require("uuid")
const { hash } = require("bcryptjs")




class users extends Model { }


users.init({
    userId: {
        type: DataTypes.STRING(60),
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(34),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },                 // step2
    roleId: {        // for relation we create foren key -- we stop our server
        type: DataTypes.STRING(255),             // first call roll model means import
        allowNull: false,                      // now move to index file for relation define
        // defaultValue: "", // step4    // step-4 server run error occur  hum ny database ma jo phlay user create kiya ha waha allow null kiya ha its means user ky against kya role decide ho ga kuch bhi nahi to ma is ki default value null chor data hu , hum delte hi kr daty han or default value bhi nahi daty

        references: {
            model: roles,
            key: "roleId",
        },

    }


}, {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
})


users.beforeCreate(async (user) => {
    user.userId = uuid();
    user.password = await hash(user.password, 10);
})


users.afterCreate(async (user) => {
    console.log("user", user);
    delete user.dataValues.password;


})


module.exports = users;


