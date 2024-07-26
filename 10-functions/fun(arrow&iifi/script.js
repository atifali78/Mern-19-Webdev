// -- ARROW FUNCTION & ANONYMOUS FUNCTION --

// array function kabi bhi without name call nahi ho sakhta ha

const evenOdd =(P1 = 7, P2 = 8) => {
      P1 % 2 == 0 ? console.log(` ${P1}-> is even`): console.log(`${P1} -> is odd`);   // template string concept add
      P2 % 2 == 0 ? console.log(`${P2} -> is even`): console.log(`${P2} -> is odd`);
}
// evenOdd()

// 7 -> is odd
// 8 -> is even

// agr ak value pass karo to kis ko set ho gi

evenOdd(2)
// 2-> is even
// 8 -> is even



