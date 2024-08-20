const { Model, DataTypes } = require("sequelize"); // we dont import seqlz we create models
const sequelize = require("../../bin/DBConnection") // we call db connection here

// now create class-->        "class ka name wohi ho ga jo model ka ho ga"
// when you extend with model class this provide you 2 objects now do we use objects
class users extends Model { } // yaha apni trf sy kuch nahi dana

// first object is attribute and second is option
users.init({           // database one thing is importat which is primary key
    userId: {
        type: DataTypes.STRING(60),   // its not necessary use only integer we use string
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
    }


}, {
    timestamps: true,  // created at() , updatedAt() time
    paranoid: true,
    modelName: "users",
    sequelize,        // DBConnection ya table ap ka is sequelize conenection pr create ho ga
})

module.exports = users;


// when you delete record its not delete from database ,soft delete hota ha kal ko ap recover
// kr sakhty ho but it have drawback when you delete user-1 and when you create new user with
// same name its not created error occur reason is it exist in database 