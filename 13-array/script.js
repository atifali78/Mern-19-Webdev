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
        //   arrow ()  // when we call [ 1, 'one', true, null, undefined, [ 1, 2 ], { age: 20 }, true ]
           // function as a reference pass, agr ma chahu function ki return value ay to arrow() karu ga
                  // isi array ma us ki return value ay to mujy call karna ho ga , round brackets sy call ho ga reference pass nahi ho ga 
        ]

console.log(array);
// console.log(array[7]()); // function call
// console.log(array[5][0]); // array
// console.log(array[6].age); // object
// in this way we itaray array


// --- Difference between methods and functions ---
//-- functions ko directly call kr sakhty han
// -- lakin methods ko ap magar objects ky call nahi kr sakhty 
// Methods- push , pop , inshift, shift indexof, include--ya class han array ki us ky methods han , mujy array create karni
// ho gi or dot . ky reference sy function call karny pary gy



// -- push method --
// // if we create variable and in new variable we push it return the array length
// array ki last pr add new value and new length return
// console.log(array.push("newValue"));  // 9    array lenth show // console ky bagar wo newValue add kary ga but you don,t seen new length kyu ky jab tk ab return valur print nahi karwayo gy ya kisi variable ma store nahi karo gy to can't see
// console.log(array);



                    // -- pop method --

// if we pop empty array it return undefined and when we colsole it it retrn deleted value
// console.log(array.pop());   // deleted value return and modify array

// console.log(array);


                    // -- unshift --

// array.unshift("name")
// console.log(array);
// array.unshift({isloged: true})
// console.log(array);


                       // -- shift --

// array.shift()
// console.log(array);


                      // -- inckude --

// ap ki arry ky andr changes nahi kary ga
// alwys use with console.log() only use for searching.
// console.log(array.includes('name'));


                     // -- Indexof --

// the value to locate in the array 
// return the index of first occurance of value in array or -1 if not in array
// agr same value multiple times ha to ya ap ko phaly waly ka hi index return kary ga 
console.log(array.indexOf(null)); // 3 index


             //------- TASK LOGICALLY -------
// Question logical 
// ya value find kary array ky andr or us ky index ku upr us value ko update kr dy



// if(array.indexOf('one')){
//  array[array.indexOf('one')] = 1                      //push current value ko update nahi kary ga , for update we use index 
// }
// console.log(array);
// -- OUTPUT:--
// [   
//     1,
//     1,
//     true,
//     null,
//     undefined,
//     [ 1, 2 ],
//     { age: 20 },
//     [Function: arrow]
//   ]




            //-- UPDATING IN ARRAY --
// const arrys = [
//     1,
//     2,
//     3
// ]
// console.log(arrys);
// arrys[arrys.indexOf(3)] = 'two'
// console.log(arrys);
// [ 1, 2, 'two' ] -- update in array


// array.unshift("one")
// console.log(array);




// if(array.indexOf('one')){                    // yaha pr truthy or falsy ka concept aa raha ha, array.indexOf('one') agr yaha value exist
//                                            // karti hui kon si value ha truthy ya us base pr chal raha ha , agr is ko ternary ma kr dain
//     array[array.indexOf('one')] = 1                      
//    }
//    console.log(array);

 


   
   array[array.indexOf('one') > -1 ?
        array.indexOf('one')  : array.length
    ]   = "valueUpdates using ternary"
    console.log(array);
                                   // array.indexOf('one')  ya kya return kary ga ya to is ka index return kary ga ya -1, index kio bhi ho 
                                    // sakhta ha agr value exist karti hui 
                                    // agr is ky agr ma karu > -1 (is ka index -1 sy grater ha its means index strat with 0 mean valid index
                                    // is ky agy quesion mark ? ky agy agr true condtion)
// agr ya value exist karti ha is ka index ho ga or index -1 sy greater ho ga its means jab bhi ya value exist karti ha (array.indexOf('one') > -1 )
// ya condtion hamasha true ho gi to ma chata hu us ky index ky uper us ki value update kr dy
// agr false hota ha -1 > -1 nahi to ma ya karta ha us ky last index ky upr value add kr dy (array.length)
// yaha pr ap array ky index ky andr ap if condtion use nahikr sakhty , ya pr ap hamsha ternary operator use ho ga 
// push kya karta ha last index ma value add karta ha ya bhi wohi kam kr raha ha 

// array ky andr ap ny value khasy add karni ha condition ki base pr 


// ab hum check karty han arrary.include kr ky array check karty han exist karti ha ky nahi

console.log(array.includes([1, 2])); // false
console.log( typeof array[5]);   // false   but it exist in array , so answer is that is it call with reference yaha pr is ki value exist 
                                      // nahi karti we check type  object type ha
                                      // kyu ky wo array ko proper array consider nahi kr raha ha us ko as a value consider nahi kr raha ha 
                                      // us ky liya hum ya karty han , agr us ko find karna ha 
                                      // array kis index pr ha phir dot us ky bad include arry ky andr kya values han
console.log(array[5].includes(1)); // true                         

// is sy mallom huwa wo array ko detect nahi kr raha ha but jab ap us ky andr further ja kr dakhty ho us case ma true retun karta ha
// ky ky aray us ko object consider kr raha ha

// ya non-premitive khasy hoti ha (kyu ky ap ny us ky andr referencee pass kr diya ha ap  us ko directly updates nahi kr sakhty 
