// datatype varName = strongly type language
// but javascipt is loosey type language(ap ky pas datatype hoty hi nahi dynamically assign ho 
// jata ha)
 
           // variable    3. var | let | const

// var - Global
// Re-assign value
// kabi bhi access kr lo


// let - Local
// Re-assign value
// Access sirf khud ky block ky andr


// Const - Local
// Re-assign nahi kr sakhty
// Access sirf khud ky block ky andr




  //------- VAR -------

  var age = 30
  var num1 = 30
  var num2 = 20
  console.log(num1 + num2);
  
  console.log(age);
  
  age = "israr"
  console.log(age);
  
  // Naming convension:
  // firstName
  // first_name
  // firstName (pref ) camel casing
  
  // var scope is Global
  if(true ){
      var ageY = 2023
  }
  console.log(ageY);  // we can access this age outside the scope thats a problem. 
  // one more problem
  
  console.log(aggVar);    // our output is undefined but not error occur
  var aggVar = 300;  // tum ny age bad ma banaaya wo memory ma to aa gaya likin usy value nahi pata
  console.log(aggVar); 
  
  // NOTE: let, const scope is = LOCAL but Var scope is = GLOBAL
  // we can access this var on console and chnage its value:
  
  // aggVar
  // 300
  // aggVar = 500
  // 500
  // console.log(aggVar)
  // VM2515:1 500
  
  
                 //-- Let --    let is local scope
  
  if (true){
      let a = 10
  }             
  // console.log(a);   // script.js:49 Uncaught ReferenceError: a is not defined
                    //  at script.js:49:13      (we can't access outside the function)
  
  
                // -- Const --    if you assign value in const you can't change it  
                           // const ki value re-assign nahi hoti
   const yourName = "israr"
  //  yourName = "israr-khan"       // error ocuur we can't change its value
   console.log(yourName);         
   
              // const case if you declear so its necessary to assign value 
   let ageAs ;
   ageAs = 3405  
   console.log(ageAs);  
   
                     //  but const you can't do this 
  
  // const namePart;
  // namePart = "official"                   
  // console.log(namePart);
  
  
  
  