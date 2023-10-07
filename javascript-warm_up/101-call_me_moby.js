// Define a function called "callMeMoby" that takes two parameters:
// x (the number of times to execute the function)
// theFunction (the function to be executed)
function callMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function whereIAm() {
    console.log("Where I am!");
}

// Call callMeMoby to execute whereIAm 5 times
callMeMoby(5, whereIAm);
