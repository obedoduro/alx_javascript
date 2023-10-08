// Define a function called "CallMeMob" that takes two  2 parameters:
const callMeMoby = require('./101-call_me_moby').callMeMoby;
function callMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function whereIAm() {
    console.log("Where I am!");
}

// Call CallMeMob to execute whereIAm 5 times
callMeMoby(5, whereIAm);

//module.exports = callMeMoby;