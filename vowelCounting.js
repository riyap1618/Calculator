const userInput = require('./userInput');

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
    const string = userInput.getStringInput('Please enter a string:');
    const count = vowelCount(string);
    for (let i in count) {
        console.log(`${i}: ${count[i]}`);
    }
}

exports.performOneVowelCountingCalculation = performOneVowelCountingCalculation;