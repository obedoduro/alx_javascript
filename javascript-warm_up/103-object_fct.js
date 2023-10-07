// Define a function called "incr" that increments an integer value by 1.
function incr(number) {
    return number + 1;
}

// Define a function called "incrementAndCall" that takes two parameters:
// number (the number to be incremented)
// theFunction (the function to be called)
function incrementAndCall(number, theFunction) {
    // Increment the number using the "incr" function
    const incrementedNumber = incr(number);

    // Call the provided function with the incremented number as an argument
    theFunction(incrementedNumber);
}

// Example usage:
function displayNumber(num) {
    console.log("The number is:", num);
}

// Call incrementAndCall to increment the number and call displayNumber
incrementAndCall(5, displayNumber);
