const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const x = 10;
const y = 5;

console.log("=== Simple Math Operations ===");
console.log(`${x} + ${y} =`, add(x, y));
console.log(`${x} - ${y} =`, subtract(x, y));
console.log(`${x} * ${y} =`, multiply(x, y));
console.log(`${x} / ${y} =`, divide(x, y));
