//-- PROMISE --

// promise make sure kr rraha ha kio na kio value return zaroor kary ga


// const promise1 = new Promise((res, rej) => {
//     const a = 3
//     if (a % 2 == 0) {
//         res("even")
//     }
//     rej("odd")
// })

// promise1.then((res) => {
//     console.log(res);
// }).catch((erroe) => {
//     console.log(erroe);
// }).finally(() => {
//     console.log("finally completed1");
// })






const promise11 = new Promise((res, rej) => { // is case ma ya resolve hi kary ga rejected nahi
    res("promise 11")

})

const promise22 = new Promise((res, rej) => { // is case ma ya resolve hi kary ga rejected nahi
    res("promise 22")

})


const main = () => {    // try catch asa block hota ha jis ma wo code likhty han jo ap expect 
    try {               // kr rahy hoty han might bhi case ky andr error return kr dy
        promise11       // Try case wo ho ga jaha expect kr rahy han kabi promise1 erroe retun 
            .then((res) => {   // kr dy to hamary program ka flow disturb na ho is liya wo is 
                console.log(res);  // error ko kaha return kr dy ga catch bloack ma
            })
        promise22
            .then((res)=> {
                console.log(res);
        })    
    
    } catch (error) {
        console.log(error);

    }
}

// main()

//-------------------------------------------------------------------------------------------//
//------------- SOME CHANGES IN PROMISE !! ---------
const promiseOne = new Promise ( (res,rej)=>{
    setTimeout( ()=> {    
          res("promise one resolve")
      }, 3000 )
} )

const promiseTwo = new Promise((res, rej) => {
    res("promise Two resolve")
} )

const mainFun = () => {   
    try {               
        promiseOne     
            .then((res) => {    
                console.log(res);  
            })
        promiseTwo
            .then((res)=> {
                console.log(res);
        })    
    
    } catch (error) {
        console.log(error);

    }
}

// mainFun()

// first comes in promise and then setTimeOut start (ab kitny seconds chaly ga wo dakhty han)
// setTimeOUt is a function that directly call and it recieve callback function
// // kisi bhi program ki execution ko limited time ky liya delay karta ha settimeout

// is program ma hum ny setTimeout diya ha promiseOne ma to wo thora late execute huwa ha
// promiseTwo execute first and then promiseOne execute.
// but promiseOne call to phlay ho raha ha but settimeout sy execute bad ma huwa ha

// promise ap ko make sure karta ha wo resolve ho ga tab hi return ho ga , promise ny make sure
// to kr diya ha but kab return kary ga ya make sure kiya ha

// javascript is synchronious programmig ha 
 // promiseOne                // is promiseOne ka timmer start ho gaya tha abhi execution ma hi
 //     .then((res) => {     // tha ky us ny promiseTwo ko print kr diya us ny means promiseTwo
 //      console.log(res);   // ny promiseOne ka complete hony ka w8 nahi kiya , agr ap chaty 
 //     })                      // ho promiseTwo w8 kary promiseOne ky complete hony ga 
 // promiseTwo                  // ap ko asynchronous karni pary gi us ky liya ap ko promise sy 
 //     .then((res)=> {        // phlay w8 lagana ho ga 
 //       console.log(res);    //" w8 always use in asynchronous function."
 // }) 

//--------------------------------------------------------------------------------------

 //  await is liya promise ky sath use hota ha promise make sure kr raha ha kuch na kuch return 
 // ho ga mara w8 karo to wo waiting state ma is ka w8 karta ha ky ya resolve ya reject return 
 // kary 
  

 const promiseThree = new Promise((res, rej)=> {
      setTimeout(()=>{
          res("promise 3 resolve")
      }, 3000 )
 } )

 const promiseFour = new Promise( (res, rej)=> {
    res("promise 4 resolve")
 } )

 const maiin = async () => {
    try {
       await  promiseThree   // await always use with promise
             .then((res) => {
                  console.log(res);
        })
       await  promiseFour
             .then((res) => {
                  console.log(res);
        })
    } catch (error) {
        console.log(error);
        
    }
 }
//  maiin()

//---------------------------------------------------------------------------------------------//
const promiseP1=new Promise((res, rej)=> {
    setTimeout(()=>{
          res(new Date().toLocaleTimeString())
    }, 1000)
} )

const promiseP2=new Promise((res, rej)=> {
    setTimeout(()=>{
          res(new Date().toLocaleTimeString())
    }, 2000)
} )

const promiseP3 = new Promise((res, rej) => {
    setTimeout( () => {
          res(new Date().toLocaleTimeString())
    }, 3000)
} )

const fun = async () => {
   try {
    await   promiseP1
            .then( (res) => {
             console.log(res);
    })
    await   promiseP2
            .then( (res) => {
             console.log(res);
    })
    await   promiseP3
            .then( (res) => {
             console.log(res);
    })
   } catch (error) {
    console.log(Error);
    
   }
}
fun()

// JAB AP LOOP MA PROMISE RETURN KARTY HAN LOOP SYNCHRONIUS HA LOOP KI SARI KI SARI ITERATION AK
// SATH HO GATI HAN 
// FOR LOOP ASYNCHRONOUS HA (ak iteration ka complte hony ka weight karta ha phir dusri karta ha )
// ab us ma issue ya ho ga jab ap primse create karo gy wo promise ky resolve hony ka weight kary
// ga or phir ap ko output dy ga 
// yani wo sari promises ak sath create mahi kary ga