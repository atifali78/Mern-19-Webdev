// ---------- LOGICAL OPERATOR --------
// their are 3 logical operator 
// AND | OR | NOT

// AND => all condition must be true (&&)
// OR => atleast one condtion must br true (||)
// NOT => true -> false & false -> true (!)



//---- AND ------ (all condtion must me true)
let age = 20
let gender = 'male'

if (age >= 18 && gender == 'male'){
    console.log('YOU are adult');
}

//----- OR --------  (at least one condtion is true)

let age2 = 30
let gender2 = 'female'

if(age2 == 30 || gender2 == 'male'){
    console.log('you are adult male');
}

// ----- NOT -----

// const num = 13;
// if(num % 2 == 0){
//     console.log('even number');
// }else{
//     console.log('odd number');
// }

// const num = 5;
// if(num % 2 != 0){
//     console.log('ODD');
// }

const num = 2;
if(!(num % 2 == 0)){
    console.log('ODD');
}