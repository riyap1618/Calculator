const readline = require('readline-sync');

function welcome(){
    console.log('Welcome to the calculator!');
}

function getStringInput(prompt) {
    console.log(prompt);
    return readline.prompt();
}

function getIntegerInput(prompt) {
    let num;
    do {
        num = +getStringInput(prompt);
    } 
    while (isNaN(num));
    return num;
}

function getOperator() {
    return getStringInput('Please enter the operator:');
}

function getNumberofArguments(operator) {
    return getIntegerInput('How many number do you want to ' + operator + '?');
}

function getArguments(numberOfArguments) {
    let arguments = new Array(numberOfArguments);

    for (let i = 0; i < numberOfArguments; i++) {
        arguments[i] = getIntegerInput('Please enter number ' + (i+1) + ':');
    }
    return arguments;
}

function calculate(operator, arguments, numberOfArguments) {
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
    return ans;
}

welcome();
while (true) {
    const operator = getOperator();
    const numberOfArguments = getNumberofArguments(operator);
    const arguments = getArguments(numberOfArguments);
    const ans = calculate(operator, arguments, numberOfArguments);
    console.log('The answer is ' + ans + '.');
}
