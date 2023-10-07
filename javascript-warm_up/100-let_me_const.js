// Modify the value of myVar to 333
var myVar = 333;

// You can also use 'let' or 'const' depending on your project requirements:
// let myVar = 333;
// const myVar = 333;

// Export the modified value (optional)
module.exports.myVar = myVar;

// Import the modified value of myVar from modifyMyVar.js
myVar = require('./0-javascript_is_amazing');