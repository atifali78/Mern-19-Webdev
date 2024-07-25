//------- LOOPS -------
// FOR | WHILE | DO WHILE

// For Loop -> if you know how many time to loop 

for (let i =1; i <= 10; i = i + 1){
    // console.log('israr' + i);
}


// While (if you know the condtion but dont know how many time to a loop to achieve loop)
/* 
                                                  YOU                                    
                                                  HOUSE
WHILE
*/

let ip = 20
let house = 20

while( ip != house){  // jab tk ma apny ghr nahi ponch pata tab tak karo
    ip = ip + 1
    // console.log('stepTaken to go home' + ip);
}


// DO WHILE LOOP:

do {
    ip = ip + 1
    // console.log('stepTaken to go home' + ip);
    
} while (ip <= house);





// game GUess the input

let numb = 40
let guess = 0

do {
//    guess = parseInt(prompt('GUESS A NUMBER'))
   if(guess == numb){
    alert('WINNER')
    break
   }
    
} while (guess != 0)     // jab tk user har na man gay

    // prompt retun string and then convert to number using parseInt


    // use this game in while loop

    while (guess != 0) {
        guess = parseInt(prompt('GUESS A NUMBER'))
        if(guess == numb){
         alert('WINNER')
         break
        }
    }  // code chaly  ga hi nahi kyu ky us ny kaha phaly hi 0 ha to nahi chala
       // us ny dakah inial point ma hi zero ha phir condtion check ki phali bar ma hi
       // zero ha loop chala hi nahi