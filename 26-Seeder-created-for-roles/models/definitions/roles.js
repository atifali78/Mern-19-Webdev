const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBConnection")

class roles extends Model { }

roles.init({
    roleId: {
        type: DataTypes.STRING(60),
        primaryKey: true,
    },
    role: {                             // step-1  roles jo han wo decided han 
        type: DataTypes.ENUM,
        values: ["Instructor", "Admin", "Trainee"], // enum is 3 ky illawa kio or values accept nahi kary ga
        allowNull: false,                               //     step-2 move to user table page and use seeders
    }
},
 {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
})

module.exports = roles;


