// datatype
// number |string | Boolean | null| undefined | objects


// Number:
let num = 3.14
let num2 = 10         // automatically inplicit type casting ho jati ha 
console.log(num + num2);


// string (alphaNumric ko string khaty han):

const firstName = "israr"
const firstNam = "khann08"
            // you can use single quote or double quote for string
console.log(firstName);
console.log(firstNam);
            // concatinate two string

console.log(firstName + ' ' + firstNam); //israr-khanisrar-kh    empty quote for space

// Boolean: 1 | 0
let booleanName = false
console.log(booleanName); //false

// Null:     (kio value nahi dalni many) null mean ya variable to ha but value nahi ha
let isLogin = null;
console.log(isLogin); // null


// uper waly case ma kio na kio space to ha but undefined ma kya ha space ha hi nahi
let isloggin = undefined
console.log(isloggin);

// null & undefined: difference is that is in null case: their is an varaible but their is an 
// existence their but having not value
// but undefind kio space hi nahi ha

// Objects:
// we have key value pair

const person = {
    fName : 'israr',
    sName : 'khan',
    agee : 33,
    isLoginpass : true,
     isLogin : null,
}
console.log(person); // {fName: 'israr', sName: 'khan', agee: 33, isLoginpass: true, isLogin: null}
      // if acces single property we use . dot
console.log(person.isLoginpass);   // true    


        //------- OPERATOR ------------
// + , - , % , /       




//Boolean senario interesting:
if(0){
      console.log(true);
}

// NOTE: 
// Js 1 -> true | 0 -> false
// Js true | False

let loginBoss = false
console.log(loginBoss + 10); // 10  
  // (0 + 10 = 10 )

  let loginBos = true
console.log(loginBos + 10); // 11 
  // (1 + 10 = 10 )


  // String senario interesting:
  // sring '1' + '1' => string
  // string + number => string
  // string * number => number

  console.log('1' + '3'); //concatenate not add
  // what is left side sring and right side is number
  console.log('1' + 22); //122 concatenate hi kr raha ha
  // agr ma multipy kr du to = to wo number ban gaya ha string nahi
  console.log('1' * 22); // number ban gaya ha

  // suppose you have string and convert into number?
  console.log('123');   // you can multipy it with number * 1
  console.log('123' * 1); // output number

  console.log('a' * 2 ); // NaN  agr add kara string data a2


                      //-------- TYPE OF -------------
console.log(typeof ('a' * 2 ));                      