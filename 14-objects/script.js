  // ------ Objects -----

  const person = {
    name: "john",
    age: 20,
    gender : "M",
    address: {
        city: "lahore"
    },
    array: [1, 2],

    arrayFunction: [function(){
        return "hFunction"
    }],

    sayHello:  function (){
        return "hello"
    }                                 // self calling function
  }
  console.log(person);
  console.log(person.sayHello());
  console.log(person.arrayFunction[0]()  );



  // key value pair:

  const person2 ={
    name: "israr",
    age: 20,

  }
console.log(  Object.keys(person2));
console.log(  Object.values(person2));
console.log(  Object.entries(person2));
