const userInput = require('./userInput');

function getOperator() {
    return userInput.getStringInput('Please enter the operator:');
}

function getNumberofArguments(operator) {
    return userInput.getIntegerInput(`How many number do you want to ${operator}?`);
}

function getArguments(numberOfArguments) {
    let arguments = new Array(numberOfArguments);

    for (let i = 0; i < numberOfArguments; i++) {
        arguments[i] = userInput.getIntegerInput(`Please enter number ${(i+1)}:`);
    }
    return arguments;
}

function calculate(operator, arguments, numberOfArguments) {
    let ans = arguments[0];
    

    switch(operator) {
        case '*':
            ans = arguments.reduce(
                (previousValue, currentValue) => previousValue * currentValue, 1);
            break;
        case '+':
            ans = arguments.reduce(
                (previousValue,currentValue) => previousValue + currentValue, 0);
            break;
        case '-':
            ans = arguments.reduce(
                (previousValue,currentValue) => previousValue - currentValue, arguments[0]);
            break;
        case '/':
            ans = arguments.slice(1).filter(x => x !== 0).reduce((previousValue,currentValue) => previousValue/currentValue, arguments[0]);
            break;
    }

    /*for (let i = 1; i < numberOfArguments; i++) {
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
    }*/
    return ans;
}

function performOneArithmeticCalculation(){
    const operator = getOperator();
    const numberOfArguments = getNumberofArguments(operator);
    const arguments = getArguments(numberOfArguments);
    const ans = calculate(operator, arguments, numberOfArguments);
    console.log(`The answer is ${ans}.`);
}

exports.performOneArithmeticCalculation = performOneArithmeticCalculation;