const readline = require('readline-sync');

function getStringInput(prompt) {
    console.log(prompt);
    return readline.prompt();
}

exports.getStringInput = getStringInput;

function getIntegerInput(prompt) {
    let num;
    do {
        num = +getStringInput(prompt);
    } 
    while (isNaN(num) && console.log('Invalid number!'));
    return num;
}

exports.getIntegerInput = getIntegerInput;