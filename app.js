var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");

function runApp() {
    inquirer.prompt([{
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Create a flash card",
                "Read all flash cards",
            ]
        }])
        .then(function(answer) {
            console.log("\n====================================================");
            switch (answer.action) {
                case "Create a flash card":
                    createCard();
                    break;
                case "Read all flash cards":
                    showCards();
                    break;
                    //COULD CHANGE THIS TO READ FLASH CARDS
                    //OPTION FOR CLOZE FLASH
                    //OPTION FOR BASIC FLASH
                    //OPTION FOR FULL FRONT BACK PARTIAL ETC
            }
        });
}

function createCard() {
    inquirer.prompt([{
            name: 'cardType',
            type: 'list',
            message: 'What kind of card would you like to create?',
            choices: [
                "Create basic card",
                "Create cloze card",
            ]
        }])
        .then(function(answer) {
            console.log("\n====================================================");
            if (answer.cardType === 'Create basic card') {
                inquirer.prompt([{
                    name: 'front',
                    type: 'input',
                    message: 'What is the question?',
                }, {

                    name: 'back',
                    type: 'input',
                    message: 'What is the answer?'
                }]).then(function(answer) {
                    var newBasic = new basicCard(answer.front, answer.back);
                    newBasic.create();
                    console.log("\n====================================================");
                    runApp();
                });
            } else if (answer.cardType === 'Create cloze card') {
                inquirer.prompt([{
                    name: 'text',
                    message: 'What is the full text?',
                }, {
                    name: 'cloze',
                    type: 'inpuit',
                    message: 'What is the cloze text?'
                }]).then(function(answer) {
                    console.log("\n====================================================");
                    var text = answer.text;
                    var cloze = answer.cloze;
                    if (text.includes(cloze)) {
                        var newCloze = new clozeCard(text, cloze);
                        newCloze.create();
                        runApp();
                    }
                });
            }
        });
};

var showCards = function() {
    fs.readFile('./log.txt', 'utf8', function(error, data) {
        console.log("\n====================================================");
        var questions = data.split(';');
        console.log(data);
        runApp();
        //BUILD OPTION TO PICK CLOZE OR BASIC
    });
};
runApp();