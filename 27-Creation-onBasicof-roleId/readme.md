step-1: -->
  commonModel create and working on it ==>
models ky inder userModel jo ha we create new nodel commonModel.js(is ma wo sary task ho gy jo hum controler create nahi kary gy gin ka) , hum ny roles ky liya controller nahi create karna,
hum ny sirf ak model create karna ha lakin wo relivent nahi ha us ma sirf ak request ho gi
jaha pr roles chahiya ho ga waha ya common model use kr lain gy ,

==> (ak hi request ho gi getRole)
      
step-2: -->
    commonModel ma try ky andr model call kar laty han
  2.1-->  models import from index.js file
  2.2--> hum ny ak cheez serach karni ha us ky liya findone method use karty han , kyu ky primary key sy find nahi kr rahy , hum simple role sy call kr rahay han, role primary key nahi ha, to hum findbyPrimary key use nahi kr sakhty 
  hum ny findone ma option start karny han

      const role = await  models.roles.findOne({        
             where: {
                role: role,  
             }
--> ab ya find kr ky la ay ga

step-3: -->
    move to userController  


step-4: -->



step-5: -->



step-6: -->



step-7: -->



step-8: -->



step-9: -->



step-10: -->

