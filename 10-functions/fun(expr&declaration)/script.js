// function evenOne(P1, P2){
//     console.log("p1->", P1);
//     console.log("p2->" , P2);
// }
// evenOne() 

// many kio value pass nahi kr raha dakhta hu kya print hota ha
// to javascript ma error nahi ata jab ap fucntion call karo or bagar arguments pass kiya to wo
// execute ho jata ha wo un ko simply undefiend consider kr lata ha , program ki execution ko disturb
// nahi karta

// in javascript datatype set on runtime define

// or ya bhi matter nahi karta ap kis type ki data send kar rahy han or kis type ka data uper set 
// ho raha ha
// p1-> undefined
// p2-> undefined

//------ Function delaration Vs function Expression ----------
// ap log ak variable define kr do gy
// variable ki nature let, const, var kio bhi

// const palindrome = function(P1, P2){
//     console.log("p1->", P1);
//     console.log("p2->" , P2);
// }
// palindrome(1) 
// asa nahi ho sakhta ak value pass ki or wo P2 ko assign ho gy, hamasha phali wali ko assign ho gi

// p1-> 1        
// p2-> undefined             


          // function declaration and function expression sy in ki working ma kio chnage nahi ata

      // BUT HAVING ONE MAIN DIFFERENCE--
      
      
// evenOneT(3, 4) 

// function evenOneT(P1, P2){
//     console.log("p1->", P1);
//     console.log("p2->" , P2);
// }



// palindrome(1, 2) 

// const palindrome = function(P1, P2){
//     console.log("p1->", P1);
//     console.log("p2->" , P2);
// }

// error occur not work
// basically we call ka variable palindrome jo abhi tk initialize nahi kiya ha 
// line 50 pr define to kr diya ha initialize nahi kiya ha.

// we call this concept hoisting
// hosting concept work with fnction declaration. 

//-1 not wrok with function expression kyu ky finction expression ma variable add hota ha or variable 
// kabi call nahi ho sakhta directly unless ak us ko initialize nahi karty us ky bad call kr dain

// ap ny yaha function create nahi kiya , ap ny variable create kiya ha or us ko function ki value
// assign ki ha

// ab ap jab bhi function call karo gy is reference (palindrome(1, 2) ) ky sath call ho raha ha



const palindrome = function(P1, P2){
    console.log("p1->", P1);
    console.log("p2->" , P2);
}
// palindrome(1, 2) 
  // ap ny yaha variable ko call kiya us ny further function ko call kiya
                    // ya function reference ha
                    // palindrome ky andr function ka reference ha agr console karu to

  console.log(   palindrome(1, 2) );   
//   p1-> 1
//   p2-> 2
//   undefined

// console.log(typeof   palindrome );  // function

 // ab ya type kon si ho gi premitive or non-premitive
//    non-premive

// ap function ko khasy call karty ho us ky name ky refernce sy directly call nahi kr sakhty

// console.log(palindrome ); // [Function: palindrome]

// ap palindrom ky reference sy fucntion ko call kr rahy ho


// function expression: ap ak variable ko function as a refernce pass karty ho
console.log("//////////");


const pali = function (p1, p2){
  console.log("p1->", p1);
  console.log("p2->", p2);
  return true
}
console.log(  pali()); // ap pali ky refernce sy us ko call kr rahy ho, pali ma function ka reference ha jab bhi
                    // ap us ko value pass karo gy wo us ky refernce ko call kr dy ga
// p1-> undefined
// p2-> undefined
// true

//--NOTE ap ny variable create kiya variable ky andr function as a refernce dal diya, jab bhi ap ky variable ma
// kio value pass karo gy (arguments) ya kis ko call karyga function ko



console.log("///////////////");
// other way example 
function evenNumber (p1, p2){
console.log("p1-> value result", p1);
console.log("p2-> value result", p2);
return true
}

const ref = evenNumber    
console.log(ref());        // jab bracket lagu gy ap function ko call kr rahy ho
         // jab ap function ko call karty ho to reference ma kya store ho ga us ki retun value
         // abhi ap us ko call nahi kr rahy ap ny ref variable create kiya us ko value assign ki function 
         // ab ap function declare kr ky value assign karo ya already declared function ki value assign karo 
         // bat ak hi ha  dono chases ma us function ka reference pass ho ga
console.log(ref);   //[Function: evenNumber]
// agr call karty ho
console.log(ref(1, 2));            // kyu kr ap log karwa rahy han us ky ander us ki value return karwa rahy han
                               // if you dont log its means you dont return value from it.
