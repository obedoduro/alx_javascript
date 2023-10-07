// Define a function called "executeXTimes" that takes two parameters:
// x (the number of times to execute the function)
// theFunction (the function to be executed)
function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function sayHello() {
    console.log("Hello, World!");
}

// Call executeXTimes to execute sayHello 3 times
executeXTimes(3, sayHello);

module.exports.executeXTimes = executeXTimes;