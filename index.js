const readline = require('readline-sync');
const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCount = require('./vowelCounting');

function welcome(){
    console.log('Welcome to the calculator!');
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function getCalculationMode(){
    console.log('Which calculator mode do you want?');
    return userInput.getStringInput(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
}
 
welcome();
while (true) {
    let calculationMode = 0;
    let i = 0;
    do {
        if (i > 0) {
            console.log('Invalid mode!');
        }
        calculationMode = getCalculationMode();
        i += 1;
    }
    while (calculationMode != 1 && calculationMode != 2);
    if (calculationMode === ARITHMETIC_MODE) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCount.performOneVowelCountingCalculation();
    }
}