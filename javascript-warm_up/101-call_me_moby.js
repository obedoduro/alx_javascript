// Define a function called "CallMeMoby" that takes two  2 parameters:
function CallMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function whereIAm() {
    console.log("Where I am!");
}

// Call CallMeMoby to execute whereIAm 5 times
CallMeMoby(5, whereIAm);
