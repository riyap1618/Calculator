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
    return getIntegerInput(`How many number do you want to ${operator}?`);
}

function getArguments(numberOfArguments) {
    let arguments = new Array(numberOfArguments);

    for (let i = 0; i < numberOfArguments; i++) {
        arguments[i] = getIntegerInput(`Please enter number ${(i+1)}:`);
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


const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function performOneArithmeticCalculation(){
    const operator = getOperator();
    const numberOfArguments = getNumberofArguments(operator);
    const arguments = getArguments(numberOfArguments);
    const ans = calculate(operator, arguments, numberOfArguments);
    console.log(`The answer is ${ans}.`);
}

function getCalculationMode(){
    console.log('Which calculator mode do you want?');
    return getStringInput(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
}

function vowelCount(string) {
    let count = {A: 0, E: 0, I: 0, O: 0, U: 0};
    const str = new String(string);
    for (let i = 0; i < str.length; i++) {
        if (count.hasOwnProperty(str[i].toUpperCase())) {
            count[str[i].toUpperCase()] += 1;
        }
    }
    return count;
}

function performOneVowelCountingCalculation() {
    const string = getStringInput('Please enter a string:');
    const count = vowelCount(string);
    for (let i in count) {
        console.log(`${i}: ${count[i]}`);
    }
}
 
welcome();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
  }
}


