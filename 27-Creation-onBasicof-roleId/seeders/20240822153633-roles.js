const {v4 : uuid} = require("uuid"); // step:4

module.exports = {
  up: (queryInterface, Sequelize) => {       
    return queryInterface.bulkInsert('roles', [     //step 3 ab roles ko kya assign karna ha
      {
        roleId: uuid(),
        role: "Instructor",  //step5 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuid(),
        role: "Admin",  //step-6
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: uuid(),
        role: "Trainee",  //step-7 run seeders
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
 
};