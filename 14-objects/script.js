// ------ Objects -----

const person = {
  name: "john",
  age: 20,
  gender: "M",
  address: {
    city: "lahore"
  },
  array: [1, 2],
  array2: [
    function () {
      return "array function"
    }
  ],
  sayHello: function () {
    return "hello"
  }                                 // self calling function
}

                // how to iterate

// console.log(person);
// console.log(person.sayHello()); //  hello    --function call in objects  , many function call kiya ha print nahi kiya us ki retrun value yaha print ho rahi ha
// console.log(person.sayHello);  // [Function: sayHello]



                // array access in obj

// console.log(person.array[1]); // 2


// for example in object their is an array2 and in array we have function so how we iterate
// console.log(person.array2[0]());   //array function     object.array-name then find index and then call function






// key value pair:

const per1 = {
  name: "israr",                // first we create 4 objects and then create array and pass the object in array we get list of it
  age: 20,
}
const per2 = {
  name: "bilal",
  age: 20,
}
const per3 = {
  name: "umar",
  age: 20,
}
const per4 = {
  name: "moh",
  age: 20,
}

const followers = [per1, per2, per3, per4]
// console.log(followers);
                         // ap ky pas hr person ka object ha us ky bad wo sary person akk array ky andr aty han
                         // output: object of array : jis ky hr index pr object ho ga
                         // it is comprsory ky jab object aa rahi ha us ky hr index pr object ho ga , or hr object similar ho ga ,values 
                         // different hon gi but keys same ho gi
// [
//   { name: 'israr', age: 20 },
//   { name: 'bilal', age: 20 },
//   { name: 'umar', age: 20 }, 
//   { name: 'moh', age: 20 }   
// ]


                         // if i get first index of array
// console.log(followers[0]);    //  { name: 'israr', age: 20 }   
//                         // if i get name of first index
// console.log(followers[0].name);   // israr                                  




               // ------ OBJECTS METHODS -------

// keys , values, entities   -- this methods not call directly 
// first ya metods kis ky han Object ky phir dot keys ab keys kis object ki chahiya wo round brackets ma likhna ha
// Object.keys(object-name)

const perName = {
       firstName: "israr",
       id: 23
}
console.log(Object.keys(perName)); // [ 'firstName', 'id' ]
console.log(Object.values(perName));  // [ 'israr', 23 ]
console.log(Object.entries(perName)); // [ [ 'firstName', 'israr' ], [ 'id', 23 ] ]

// for example ab table create karna chaty han to table ky andr header 1 time likha chaty ho na , to ap object.keys sy sari header create kr
// sakhty ho is methods ky liya ap keys use kr lo gy or values ky liya object.values

//  key values pair ak complete entries hoti ha , perName object ha kitni entries han 2 , 1: firstName israr and second id 23 



