now create seeder to create dummy data in database in roles table 
step-1 :
 https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed
and copy command to install package of seeder
npx sequelize-cli seed:generate --name roles
   roles ky liya seeder kr rahy han
now you seen new folder seeders create and have file in it 



step-2 :
 copy this code and paste in seeder folder
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {          this will delete
    return queryInterface.bulkDelete('Users', null, {});
  },
};

// line 15 ma likha ga bulk insert hum ny ak insert karni ha agr ap bulk insert karty han its 
// means ap ny multiple creation karni ha ak sath means ak tini ky tino roles ak sath provide 
// karo gy agr nahi karna to simple insert use kr lo

// for lnowledge visit this-- https://dev.to/idmega2000/seeding-data-with-sequelize-1f3o

// mary kyal sy is ma bulk issert hi ha simple insert nahi ha

step-3 :
 seeders>file roles name give
 bulk insert ma hum ny provide kiya ha users ,hamay roles ky table ka kya name ha roles
 // hum roles table ma kya assign ha roleId and role unnecessry thing remove from seeder.

 step4: seeder> fole import uuid package at top to create roleId

 step-5: ab ya mara phala seed run ho gy ga ma is seed ko run karu ga mary pas ak role create ho gy ga gis ki id uuid crate ho gy gi or role Instructor ho ga

 /step-6: am ak sy sada role create karna chata hu copy kar ga , 
 ab mary pas 3 role create ho  rahy han seeder ky throught.

 /step-7 run seeder ap wo command copy kary jo sequelize document ma likhi ha -- us ki bajay ap 
 package.json ma ay commannd ko copy kary sequelize docu sy  --> npx sequelize-cli db:seed:all
 --> script waly portion ma start sy nichy add karty han
 -->  "seed": "npx sequelize-cli db:seed:all" ya add kiya 
 --> ab jab bhi ap npm run seed karo gy ya command automatically run ho gy gi rether ap comand full run karty

 --> npm run seed --> error occur we miss some package 
 --> installing CLI:
    npm install --save-dev sequelize-cli
 --> Project bootstrapping:  
    npx sequelize-cli init --force 
    now when we run command npm run seed its says install packege ERROR: Please install mysql2 package manually
--> now run npm run seed error occur  bin folder nichy it need database credentials hum delete karty han config.json ma .
//hamy install karny ki zarurat nahi thi mysql ko
--> config.json ma changes karn ga 

acha seeder jo han proper jab ap create kar laty ho means ak bar database create kr laty ho us ky
bad delete kr laty ho 

{
  "development": {
    "username": "postgres",
    "password": "Pakistan78690",
    "database": "Dashboard",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"    
  }
}
 this write in config.json
 now run commnand and migration created.


 --> now seed create kr ma database ma ja kr seed delete karta hu or or dubara command run 
 karta hu dubara create ho gy ga 

 -- seeder is helpful when you are in development phase and you want again and agian testing you need data 