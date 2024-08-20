require("dotenv").config(); // first config .env file
const { Sequelize } = require("sequelize") // sequelize packege import

// database connection build
const sequelize = new Sequelize({  // this new sequelize object we pas required credentials
    username: process.env.DB_USERNAME,      // env file process method is process.env.
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
})
// you can say that hum wo jo .env ma kiya ha yaha bhi to direct kr sakhty thy but their 
// is an a reason farq ya jab ap deploy karty huwy ap nahi chaty ap ka code kabhi yaha 
// mention ho . waha pr ap enviroment variable create karty ho

// we authenticate our DB connection: below:
// authenticate is promise and their is 2 method to call promise ak .then&catch sy 
// or ak asyc&await ky sath . yaha pr asyc nahi use kr rahy yaha hum ak extra function 
// create nahi karna cha rahy.
sequelize.authenticate()
.then(() => {
    console.log("Connected to dataBase");
})
.catch((error) => {
    console.log("Failed to connected DataBase!", error);
})
module.exports = sequelize;