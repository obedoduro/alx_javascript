// Define a function called "callMeMoby" that takes two parameters:
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
