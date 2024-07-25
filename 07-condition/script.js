//-------- IF-ELSE ----------


// const age = 12
// if (age >= 18) {
//     console.log('Yes, you can vote');
// } else {
//     console.log('No you cant vote');
// }





// --------- Else-if ---------

// you have multiple conditions.        
const age = 90
if (age >= 80) {
    // console.log('yes , you are aged citizen you can vote');
}
else if (age >= 18) {
    // console.log('Yes, you can vote');
}
else {
    // console.log('No you cant vote');
}




// -------- SHORT FORM OF IF-ELSE -------
// -----------TERNARY OPERATOR ---------
// if you have 2 condition you used this if many condition use else-if

const youAge = 10
youAge >= 80 ? console.log('Yes') : console.log('No')

// you can also assign this to variable
let result = youAge >= 80 ? 'yes' : 'no'
// console.log(result);




// ----------- SWITCH CASE -------------

const option = 5

switch(option){
    case 1:{
        console.log('asslam alkim');
    }
    break;
    case 2: {
        console.log('hello');
    }
    break;
    case 3: console.log('bey');
    break;
    default: {
        // console.log('invalid option');
    }
}


// switch(option){
//     case 1:console.log('asslam alkim');
//     break;
//     case 2:console.log('hello');
//     break;
//     case 3:console.log('bey');
//     break;
//     default:console.log('invalid option');
// }

let a = 30;
let opt = '+';
let b = 20;

switch(opt){
    case '+': console.log(a + b);
    break;
    case '-': console.log(a - b);
    break;
    case '*': console.log(a * b);
    break;
    default: console.log('invalid opt');
}

  //  hum else-if bhi laga sakhty han but wo scalabe nahi ha