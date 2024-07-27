                           // ---- SPREAD AND REST OPERATOR ----


  // -- REST OPERATOR -- in ARRAYs                         
const array = [1, 2, 3, 4, 5, 6, 7, 8]                           

// if you simple de-structuring for example 

const [a, b, c] = array
// console.log("a :" , a);
// console.log("b :" , b);
// console.log("c :" , c);
// output:
// a : 1
// b : 2
// c : 3

// we know that 1 is assign to a, 2 is assign to b and baki sari values we want to assign to c
// so which operator we used  Rest, we use 3 dot at c

const array2 = [1, 2, 3, 4, 5, 6, 7, 8]  

const [aa, bb, ...cc] = array2
// console.log("aa :" , aa);
// console.log("bb :" , bb);
// console.log("cc :" , cc);
// OutPut:
// aa : 1
// bb : 2
// cc : [ 3, 4, 5, 6, 7, 8 ] // we see array create and baki sari values assign to c
// agr ma ya 3 dots bb ko du thats not possible
// a rest element must be last in de-structing pattern



// DRAWBACK OF REST OPERATOR: 
// always last one
// but destructring karty huwy ap spread bhi use kr sakhty han or rest operator bhi
// destructing you dont need spread operator wo deep cccopy hi hota ha



               // -- REST OPERATOR -- in OBJECTSs      

 const person ={
    id:  "123",
    "full  name": "john",        // if you want some spaces in key you use DOuble Quote
    age : 20,
    dob: 2000            
 }
                    // i want to de-structure object 
 const {age, ...user} = person
//  console.log(age);
//  console.log(user);
 // output:
//  123
// { 'full  name': 'john', age: 20, dob: 2000 }

           // -- REST OPERATOR -- in FUNCTIONS --  

   const check = ({id, ...user}) => { // sab sy phlay mujy ak object ma send karna ha
         console.log(id);
         console.log(user);
   }     
//    check(person)   
   // outPut:
//    123
// { 'full  name': 'john', age: 20, dob: 2000 } 



// suppose ma yaha ak or value assign kr data hu parameter ma array ka name

const arrs = [1, 2,3, 4, 5, 6, 7]
const checker = ({id, ...user}, arrs) => { // sab sy phlay mujy ak object ma send karna ha
    console.log(id);
    console.log(user);
    console.log(arrs);
}     
// checker(person,arrs)  
// OUTPUT:
// 123
// { 'full  name': 'john', age: 20, dob: 2000 }
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

           //line 73 ma ({id, ...user}, arrs) id and ...user ko ak parameter consider kkr raha 
           //ha or array ko different paramter consider kr raha ha


// note: function ma deep copy hoti ha, function to pass hi by copy hoty han paramter ap ky
// wo concept khtm ho gata ha ap array send kar rahy ho ya objects kyu ky fnction ky paramter 
// jab bhi snd hoty han wo kon si copy hoty han deep copy, by reference send nahi hoty by copy 
// send hoty han, or agr ap kio function send karo gy even spread ya rest operator send karo gy 
// wo reference hi send ho ga


                       // ------- SPREAD OPERATOR ----------
// -- spread operator use in array case --
const arrayCheck = [1, 2, 3, 4, 5, 6, 7]

// const tempArray = {...arrayCheck}  // ya shallow copy ho raha tha
const tempArray = [...arrayCheck ]    // ab deep copy ho raha ha

// spread operator ky case ma equal ky left side pr ap three dots nahi use karty
// yaha pr hui ha shallow copy line 102 ma(ap temArray ma ya arrayCheck ma chnages kary reflect ho gi)
tempArray[0]= "checkValue"

// console.log(arrayCheck);
// console.log(tempArray);

// ap ny arrayCheck ma kio changes nahi ki wo logically 1 sy 7 tk values honi chaiya but ap ny
// tempArray ma changes ki ha us ky zero index ma values ani chahiya

// agr app asa nahi karna chaty deep copy karna chaty han to yaha pr (const tempArray = [...arrayCheck])
// lagany pary gy or is ko square brackets ma move karna ho ga

// -- OUTPUT:--  ab orignal array ma change nahi aa raha ha
// [
//     1, 2, 3, 4,
//     5, 6, 7    
//   ]
//   [ 'checkValue', 2, 3, 4, 5, 6, 7 ]


// --IF YOU WANT TO USE SPRED OPERATOR IN DESTRUCTING CASE--
// means destructiong ky case ma dono spread and rest operator use karna ha


const arrayDono =[1, 2, 3, 4, 5, 6, 7]
// const [x, y, z] = [...arrayDono] // 1 2 3
const [x, y, z] = [...arrayDono] // 1 2 [ 3, 4, 5, 6, 7 ]
// console.log(x, y, z);

// 1 2 [ 3, 4, 5, 6, 7 ]   useless case


// ---- OBJECT CASE SPREAD OPERATOR USE -----
const objectA = {
    id:  "123",
    "full  name": "john",      
    age : 20,
    dob: 2000            
 }

 const objB = {...objectA};
 objB.id = "555"
//  console.log(objectA);
//  console.log(objB);

 // OutPut:
 // line 149 before spread use changes occur in both
//  { id: '555', 'full  name': 'john', age: 20, dob: 2000 }
// { id: '555', 'full  name': 'john', age: 20, dob: 2000 }
// after spread opreator use :
// { id: '123', 'full  name': 'john', age: 20, dob: 2000 }
// { id: '555', 'full  name': 'john', age: 20, dob: 2000 }


// ---- FUNCTION CASE SPREAD OPERATOR USE -----
// shallow copy:
// deep copy : both have independent values
// premitive arrays kab tak premitive han (jab tak kio nested array nahi ha)
// object kab tk premitive han jab tk nested object nahi han
// premitive objects ya premitve array ko deep copy karo gy to wo ho gy gi
//but wo non-premitive kab hoti han jab nested array ya object ho us case ma deep copy nahi kr sakhty
// us case ma ko ap ka higher order ha means jo ap ki parent array ha wo deep copy lakin us ma child
// array ha wo shallow copy us ko alag sy deep copy dana ho ga ap ko -> us ka index dy kr de-struc
// ting karo gy 

  // -- function case --
const mainArr = [1, 2, 3, 4, 5, 6, 7]


  const main = (a, b, c) => {
       console.log(a);
       console.log(b);
       console.log(c);
  }
  main(mainArr) // ap ny ak argumets pass kiya ha wo sirf ak parameter ko assign huwa ha ap ya chaty ho
  // is array ko tino ma assign karu its means ap array ko kya kr rahy ho spread 
  // to spread oper kaha use ho ga argument ma  
//   [                                                   
//     1, 2, 3, 4,                                        
//     5, 6, 7    
//   ]
//   undefined
//   undefined

const mainArray = [1, 2, 3, 4, 5, 6, 7]


  const mainn = (a, b, c) => {
       console.log(a);
       console.log(b);
       console.log(c);
  }
  mainn(...mainArray) // 1 2 3

  // NOTE : spread  opeartor function ky case ma kaha assign hota ha argument ma
  // agr ma bat karu rest opr function ma kaha use hota ha parameter ma
  // rest oper kis case ma use kary gy , kis variable ky sath use kary gy
  // rest opr in fucntion case use in paramter , parameter ma value kya hoti han ASSIGN
  // parameter ko values kya hoti han assign
  // argument values set karta ha 

  // Rest operator waha use ho ga jaha value assign ho rahi han
  // Spread operator kaha use ho ga jo values assign kr raha ha

  // Question rest operator ky case ma shallow copy hoti ha ya deep copy
  // ans Premitive type ky  liya deep copy hoti ha or non-premitive ky liya shalow copy
  // agr ap ky pass nested array ha to wo ap ky pas non-premitive ha 



  // map or foreach loop use for iterate table ky laya (itrate table is arrays) , object itretable nahi hoty
  // itreatable use in forntend , backend not visualize your data