// pass by copy & pass by reference

const check = (param) => {
    param = 10
    console.log(param);
}


const Arg = 4
check(Arg)
console.log(Arg);
// 10
// 4

// ab ma function ky andr param ko 10 kr data hu to kya print ho ga 10 output




// ab ma is ko array bana data hu
const check2 = (param) => {
    console.log("p", param);
}

const Arg2 = [1, 2]
check2(Arg2)
console.log("A", Arg2);
//output:
// p [ 1, 2 ]
// A [ 1, 2 ]





const cheker = (cal) => {
    cal = [33, 44]
    console.log("P", cal);
}

const arr = [11, 22]
cheker(arr)

console.log("A", arr);  // in JS array bhi copy pass hoti ha not reference pass nahi hota, objects ki
// copy pass hoti

// P [ 33, 44 ]
// A [ 11, 22 ]

// in javascript array or object copy ki pass hoti ha
// javascriptky andr values as a refrence pass nahi hoti 
// srif functions as reference pass hoty han

console.log("-----------");
// agr mujy is argument ki values change karna chata hu sab sy phaly ma ak main scope create karta hu


const main = () => {

    const cheker2 = (parm, updateArray) => {
        console.log("P", parm);
        updateArray([4, 5])
    };

    let arg = [1, 2]         // ma let arr2 ki value change karna chata hu , is ky liya hum ak function
                            // create karty han

    const updateArray = (newValue) => {
        arg = newValue
    }
    cheker2(arg, updateArray)
    console.log("ARG", arg);
}


main()
