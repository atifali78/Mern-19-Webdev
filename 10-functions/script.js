// function declaration

// function declaration( num1, num2){
//     console.log("the first value is :", num1 );
//     console.log("the second value is :", num2 );
// }

// declaration()  // if we not pass any argument in function calling they are declare undefined





// function declara2( num1, num2){
//     console.log("the first value is :", num1 );
//     console.log("the second value is :", num2 );
// }
// declara2()
//the first value is : undefined
//the second value is : undefined





// ------------ function expression---------
// in function expression we create variable and pass the reference of a function




   //hosting  concept 
// expr(23, 43)
// const expr = function( N1, N2 ){
//     console.log("check first:" , N1 );
//     console.log("check second:", N2  );
// }




const expr = function( N1, N2 ){
    console.log("check first:" , N1 );
    console.log("check second:", N2  );
}

expr(23, 43)





// ARROW Function & Anoymous Function:

const evenOdd = (
    P1 = 7,
    P2 = 6
) => {

    P1 % 2 == 0 ? console.log( `${P1} -> is even ` ): console.log( `${P1} -> is odd ` )
    P2 % 2 == 0 ? console.log( `${P2} -> is even ` ): console.log( `${P2} -> is odd ` )

}
evenOdd(33,44)



//pass by copy and pass by refrence

const check = (Param) => {

    Param = [4, 5]
    console.log("p", Param );
}
