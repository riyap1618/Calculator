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
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    arithmetic.performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowelCount.performOneVowelCountingCalculation();
  }
}


