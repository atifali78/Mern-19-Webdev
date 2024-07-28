/*

const digitalClock = () => {
    const updateClock = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(new Date().toLocaleTimeString());
        }, 1000);
      });
    };
  
    const runClock = async () => {
      try {
        while (true) {  // Infinite loop for continuous clock update
          const time = await updateClock();
         console.clear();  // Clear the console to update the clock in place
          console.log(time);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    runClock();
  };
  
  digitalClock();
  
*/


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                          // -- without nested function --
//   To rewrite the digitalClock function without using a nested function, you can separate the logic into distinct 
//   functions outside of the digitalClock function itself. This means you’ll have an updateClock function and a
//   runClock function that are not nested within each other. Here’s how you can refactor the code:


// Function to update the clock
const updateClock = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date().toLocaleTimeString());
      }, 1000);
    });
  };
  
  // Function to run the clock
  const runClock = async () => {
    try {
      while (true) { // Infinite loop for continuous clock update
        const time = await updateClock();
        console.clear(); // Clear the console to update the clock in place
        console.log(time);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Main digital clock function
  const digitalClock = () => {
    runClock();
  };
  
  digitalClock();
  
  
  /*
  Explanation:
  updateClock Function:
  
  This function is responsible for creating a promise that resolves with the current time as a formatted string after a delay of 1 second.
  runClock Function:
  
  This function is an asynchronous function that continuously updates the clock. It uses an infinite loop (while (true)) to repeatedly wait for the updateClock function to resolve, then clears the console and logs the current time.
  digitalClock Function:
  
  This is the main function that starts the clock by calling runClock.
  Benefits of this Refactoring:
  Modularity: Each function is responsible for a single task, making the code easier to read and maintain.
  Separation of Concerns: The logic for updating and running the clock is clearly separated, which can make testing and debugging simpler.
  Scalability: By having separate functions, it becomes easier to add additional features or modify existing functionality without affecting unrelated parts of the code.
  This approach maintains the same functionality while adhering to a cleaner structure without nested functions.  
  */
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                         // -- with help of recursive functions --
  /*
                                         const digitalClock = () => {
                                          const updateClock = () => {
                                            return new Promise((resolve) => {
                                              setTimeout(() => {
                                                resolve(new Date().toLocaleTimeString());
                                              }, 1000);
                                            });
                                          };
                                        
                                          const runClock = async () => {
                                            try {
                                              const time = await updateClock();
                                              console.clear();  // Clear the console to update the clock in place
                                              console.log(time);
                                              runClock();  // Call the function recursively to update the clock again
                                            } catch (error) {
                                              console.error(error);
                                            }
                                          };
                                        
                                          runClock();
                                        };
                                        
                                        digitalClock();
                                                                              
  
  */
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                      // --------- loop --------
  
  /*
  const digitalClock = () => {
      const updateClock = () => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(new Date().toLocaleTimeString());
          }, 1000);
        });
      };
    
      const runClock = async () => {
        try {
          while (true) {  // Infinite loop for continuous clock update
            const time = await updateClock();
            console.clear();  // Clear the console to update the clock in place
            console.log(time);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
    
      runClock();
    };
    
    digitalClock();
   
  */  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
                                            //  -- old method  recursive --
  
  /*
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
  
  */
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
                                                // --- old method loop ---
  
  /*
  
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
  
  // Async function to run the clock using a loop
  async function runClockWithLoop() {
      while (true) {
          updateClock();
          await delay(1000); // Wait for 1 second before updating the clock again
      }
  }
  
  // Start the clock using a loop
  runClockWithLoop();
  */
  