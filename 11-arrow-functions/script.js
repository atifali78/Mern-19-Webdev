// ARROW FUNCTIONS

// **********synatx:********

//simple function
function sayHello(){
    console.log('helllo');
}
sayHello()



//arrow function
const saidHelo = () => {
    console.log('say arrow function');
}
saidHelo()



//add two values
const add = (a, b) => {
   return a + b
}
console.log(add(20,20));

// short function -- and when used when we have one statement in function body
// if you used parenthesis so return is necessary but if not you omit return word 
const addv2 =(a , b) => a + b     // one liner function
console.log(addv2(4, 9));


//********* */ 'arguments ' keyword *********

function addManyNumber (){
    console.log(arguments);
}
addManyNumber(5,4,3,2,1 )
// arguments keyword ko used kr ky dynamically jinty marzi arguments ko access kr sakhta hu
// but this argument keyword not availabe in arrow function so we used spread operator


const addMyArrow = (...nub) => {
    console.log(nub);
}
addMyArrow(10,20,30) // (3) [10, 20, 30]

// ****** Hositing ******
// avaiable in normal function and what is thid
// is fucntion ko define bad ma kiya ha call phlay kiya ha its works in normal function
// but in arrow function its not work 
// javascript basically jo bho function hoty han na us ko phlay hi memory ma rakh lati ha
// chay ap us ko bad ma define karo ya phaly wo hr bar work kary ga
hostNumbe()

function hostNumbe (){
    console.log('hey their ?');
}


// ArrHost() //ReferenceError: Cannot access 'ArrHost' before initialization error
// const ArrHost = () => {
//     console.log('how are you');
// }


//****** */ This keyword ********
                     // normal function ma jo this ha wo is object (obj) ko refer kr raha ha
const obj ={
    value: 20, 
    price: 300,
    myfunction: function (){
        console.log( 'value is  ' + this.price)
        // console.log( 'value is  ' + this)  // object
    },
}
obj.myfunction() //20



// jab tum arrow function banaty ho us ka scope hota ha global to this keyword window object 
// ko refer karta ha wo object ko refer nahi kr raha ha
const obj2 ={
    value: 20, 
    price: 300,
    myfunction:  () => {
        console.log( this)
        // console.log( 'value is  ' + this)
    },
}
obj2.myfunction() //20