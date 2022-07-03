const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter the operator:');
const operator = readline.prompt();

console.log('Please enter the first number:');
const response1 = readline.prompt();
const firstNum = +response1;

console.log('Please enter the second number:');
const response2 = readline.prompt();
const secondNum = +response2;

let ans = 0;

switch(operator) {
case '*':
    ans = firstNum * secondNum;
    break;
case '+':
    ans = firstNum + secondNum;
    break;
case '-':
    ans = firstNum - secondNum;
    break;
case '/':
    ans = firstNum / secondNum;
    break;
default:
    break;
}

console.log('The answer is ' + ans + '.');
