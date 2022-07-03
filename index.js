const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter the operator:');
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + '?');
const number = readline.prompt();
const numberOfArguments = +number;

let arguments = new Array(numberOfArguments);

for (let i = 0; i < numberOfArguments; i++) {
    console.log('Please enter number ' + (i+1) + ':');
    arguments[i] = +readline.prompt();
}

let ans = arguments[0];

for (let i = 1; i < numberOfArguments; i++) {
    switch(operator) {
        case '*':
            ans *= arguments[i];
            break;
        case '+':
            ans += arguments[i];
            break;
        case '-':
            ans -= arguments[i];
            break;
        case '/':
            ans /= arguments[i];
            break;
    }
}

console.log('The answer is ' + ans + '.');
