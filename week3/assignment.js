//1. Print Numbers from 1 to 10
console.log('Print Number from 1 to 10')

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Even or Odd Checker
console.log('Even or Odd Checker')
const prompt= require('prompt-sync')();

let number = prompt("Enter a number:");
number = Number(number);

if (number % 2 === 0) {
console.log(number + " is even");
} else {
console.log(number + " is odd");
}

//3. Simple Calculator (Addition)
console.log('Simple Calculator')

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let sum = num1 + num2;
console.log("The sum is: " + sum);

//Grade Checker
console.log('Grade Checker')
let score = Number(prompt("Enter your score:"));

if (score >= 90 && score <= 100) {
console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
console.log("Grade: C");
} else {
console.log("Fail");
}

//5. Multiplication Table Generator
console.log('Multiplication Table')

let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
  console.log(num + " × " + i + " = " + (num * i));
}

//6. Array of Fruits
console.log('Array of Fruits')
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

//7. Find the Largest Number
console.log('Find the largest Number')
let numbers = [12, 5, 20, 25, 7];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > largest) {
    largest = numbers[i];
}
}

console.log("The largest number is: " + largest);

// 8. Reverse a String
console.log('Revenge a String')

let word = prompt("Enter a word:");
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
reversed += word[i];
}

console.log("Reversed word: " + reversed);

//9. Prime Number Checker
console.log('Prime Number Checker')
let numb = Number(prompt("Enter a number:"));
let isPrime = true;

if (numb <= 1) {
isPrime = false;
} else {
for (let i = 2; i <= numb / 2; i++) {
    if (numb % i === 0) {
    isPrime = false;
    break;
    }
}
}

if (isPrime) {
console.log(num + " is a prime number");
} else {
console.log(num + " is not a prime number");
}

//10. Array Filtering (Adults Only)
console.log('Array Filtering')
let ages = [12, 18, 25, 30, 15];
let adults = [];

for (let i = 0; i < ages.length; i++) {
if (ages[i] >= 18) {
    adults.push(ages[i]);
}
}

console.log("Adults (18 or above): " + adults);


