// // script.js

// // Function to get the current time as a formatted string
// function getCurrentTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
// }

// // Function to update the clock display
// function updateClock() {
//     console.log(getCurrentTime());
// }

// // Function to wait for a specific amount of time using a Promise
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Async function to run the clock
// async function runClock() {
//     while (true) {
//         updateClock();
//         await delay(1000); // Wait for 1 second before updating the clock again
//     }
// }

// // Start the clock
// runClock();





// ---------- using loops ------------


// script.js

// Function to get the current time as a formatted string
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to update the clock display
function updateClock() {
    console.log(getCurrentTime()); // This logs the current time to the console
}

// Function to wait for a specific amount of time using a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to run the clock using recursion
async function runClockWithRecursion() {
    updateClock();
    await delay(1000); // Wait for 1 second
    runClockWithRecursion(); // Recursively call the function to continue updating
}

// Start the clock using recursion
runClockWithRecursion();
