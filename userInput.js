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
    while (isNaN(num));
    return num;
}

exports.getIntegerInput = getIntegerInput;