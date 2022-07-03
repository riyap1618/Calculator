const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter the first number:');
const response1 = readline.prompt();

console.log('Please enter the second number:');
const response2 = readline.prompt();

console.log('The product is ' + response1*response2 + '.');
