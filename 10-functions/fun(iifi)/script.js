// IIFE
// ap ny function create kiya or foren sy call kr diya

// kio bhi asa function jo ap chaty ho khud sy call ho gy jab ap us ko declare karo to

  //-- IFFE --  
  

// variation of iife
    

const evenOdd = (P1 = 7, P2 = ((params) => {
    console.log("iifi function works -> ", params);
    return 1;
})("params values argument")) => {
    P1 % 2 == 0 ? console.log(` ${P1}-> is even`) : console.log(`${P1} -> is odd`);   // template string concept add
    P2 % 2 == 0 ? console.log(`${P2} -> is even`) : console.log(`${P2} -> is odd`);
}
evenOdd(4, 6)

// iifi function works ->  params values argument
//  2-> is even                                                    
// 1 -> is odd   

// ab many ak function declare kiya jis ky paramter ko many ak iffi assign 
// kiya ha 

// sab sy phaly us ny function call kiya is ky parametre set kr diya many
// kio argument pass nahi kiya to defalut set ho gay gy p1 ma 7 or p2 ma ak iffi
// ya wo function ha jis ko ap call nahi karo gy ya jaha pr bhi declare ho
// ga khud sy hi call ho gy ga p2 ko kya assign ko gi 1 kyu ky wo return kr
// raha ha 1

// agr ma  is ma 2 argument pass karta hu to iffi nahi chaly ga evenOdd(2, 3)

// ap iifi function ko as a paramter ky ander set kar sakhty han

// for examole you can check person login us ka tokken exist karta ha ky nahi 
// agr tokken exist karta ha to tokken ki value assign ho gy otherwise wo value
// assign kr dy no-tokken


   










