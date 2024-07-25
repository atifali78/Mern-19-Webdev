const arrow = () => {
    return true
}


const array = [
    
    1,
     "one",
      true ,
       null ,
        undefined,
         [1, 2],
          {age: 20}, 
          arrow 
        ]

console.log(array);
console.log(array[7]()); // function call
console.log(array[5][0]); // array
console.log(array[6].age); // object


// -- push method --
// if we create variable and in new variable we push it return the array length
array.push("hello")
console.log(array);

// -- pop method --
array.pop()

console.log(array);

// -- unshift --
array.unshift("name")
console.log(array);
array.unshift({isloged: true})
console.log(array);


// -- shift --
array.shift()
console.log(array);

// -- inckude --
console.log(array.includes('name'));




