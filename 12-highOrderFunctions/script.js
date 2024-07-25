  //------ HIGN ORDER FUNCTION  and CALLback------

  // a function that takes a function as argument is called hign order fnction

  function add (a, b, cb){   // high order fuction ya fucntion ko as a argument accept kr raha ha 
    let result = a + b;
    cb( result );
  }

  add(22 , 4 ,  function(val){
    console.log(val);
  } )


// hum add function ko call khasy karty han add() many kya kiya many apna function ko cb ma pass
// kr diya  cb kya ha callback  or line 7 ma callback ko call kr diya by giving this result as 
// argument.

 function addVV (a, b, callBack){
    let result = a + b;
    callBack(result)
 }

function showRest (resu){
  console.log(resu);
}
   // showRest() ko asy call karny ki bajay nichy argument ma pass kr diya, to ya showRest 
   // callback ma chala gaya ,callback jab call huwa us ny parameter ma result dal diya phir wo
   // line 24 ma aya or console kr diya. 

addVV(4, 5 , showRest)




// short form 
function addV (a, b, callBack){
  let result = a + b;
  callBack(result)
}

addV(12, 5 , (valu) => console.log( "short form:", valu))
addV(44, 99 , valu => console.log( "short form:", valu)) // arrow function ha gis ky ander valu
                                                          // ak argument ha jo line 39 result 
                                                          // sy ay ga
  

  // ho sakhta ha ya addition kuch time lata ho, ho sakhta ha is ko api ma ly kr jana ho thota
  // time lag sakhta ha ma is ko bol sakhta hu tum ya kam karty raho jab tumhara kam ho gy ga
  // tab mara ak function ha us ko run kr dana


  // Imp: ak function ak function ko return bhi kr sakhta ha

  function addison (a, b, callB){
    let result = a + b
    callB(result)

    return () => console.log(result); // ya line 55 function ak function hi return kr raha ha
                                // lets say ma callback function nahi liya ma undefined krta hu
  }

  // addison(100, 20, undefined )
   let resultFunction = addison(200, 20, ()=> {} ) // ya krny say kuch console nahi huwa
                                                  // is ny add to kr diya line 56,57 ma phir 
                                                  // is ny function retuen kr diya line 59
                                                  // wo function line 64 ma aa gaya ab ya 
   resultFunction()                               // function ha jab is ko call karu ga to reslt 
                                                  // ay ga







//  HIGH ORDERED FUNCTION:
 // function which takes another function as an arguments called HOF.

//  CALLBACK FUNCTION:
 // function which get passed as an arguments to another function called CBF. 
console.log("HIGH ORDER FUNCTION ");

const additive = ( a, b) => {
   return a + b
}



const subs = ( a, b) => {
   return Math.abs (a + b)         //Math.abs give convert negative to positive
}
 


const muls = ( a, b) => {
  return a * b
}




// master function

const calculator = (num1, num2, operators) => {          //asa function jo fusry function ko
                                                        // as an argument accept kr raha ha
                                                        // high orrder function ha
  return operators(num1, num2)

}


console.log(calculator(5,6, additive));
console.log(calculator(5,6, muls));
console.log(calculator(5,6, subs));
// asa function ko dusry fuction ma as an argument pass ho raha ha wo callback function ha
// additive callback function ha




/////////////////////////////////////////////////////////////////////////////////////////////
function a (b){
   console.dir(b);
   b()
}
// a('hey')  // string pass
// a({username: 'israr', email: 'israr@gmail.com'})   // object pass
// a([11, 22, 44, 55])     // array pass

function heySay(){
  console.log("HEYYYYYYYY");
}
a(heySay)


