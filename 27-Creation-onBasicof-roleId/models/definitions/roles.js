const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBConnection")

class roles extends Model { }

roles.init({
    roleId: {
        type: DataTypes.STRING(60),
        primaryKey: true,
    },
    role: {                            
        type: DataTypes.ENUM,
        values: ["Instructor", "Admin", "Trainee"],
        allowNull: false,                            
    }
},
 {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
})

module.exports = roles;


