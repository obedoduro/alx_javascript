// Define a function called "CallMeMob" that takes two  2 parameters:
function CallMeMob(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function whereIAm() {
    console.log("Where I am!");
}

// Call CallMeMob to execute whereIAm 5 times
CallMeMob(5, whereIAm);
