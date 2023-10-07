// Define a function called "incrementAndCall" that takes two parameters:
// number (the number to be incremented)
// theFunction (the function to be called)
function incrementAndCall(number, theFunction) {
    // Increment the number
    number++;

    // Call the provided function with the incremented number as an argument
    theFunction(number);
}

// Example usage:
function displayNumber(num) {
    console.log("The number is:", num);
}

// Call incrementAndCall to increment the number and call displayNumber
incrementAndCall(5, displayNumber);
