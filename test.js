var basicFlash = require("./basicCard.js");
var clozeFlash = require("./clozeCard.js");
var inquirer = require("inquirer");

function runApp() {
    inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Create a flash card",
                "Read all flash cards"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "Create a flash card":
                    //CREATECARD();
                    break;
                case "Read all flash cards":
                    //READFLASHCARDS();
                    break;
            }
        });
}

function createCard() {
    inquirer.promt({
            name: 'cardType',
            type: 'list',
            message: 'What kind of card would you like to create?',
            choices: [
                "Create basic card",
                "Create cloze card"
            ]
        })
        .then(function(answer) {
            if (answer.cardType === 'Create basic card') {
                inquirer.prompt({
                    name: 'front',
                    type: 'input',
                    message: 'What is the question?',
                }, {

                    name: 'back',
                    type: 'input',
                    message: 'What is the answer?'
                }).then(function(answer) {
                    var newBasic = new BasicCard(answer.front, answer.back);
                    newBasic.create();
                });
            } else if (answer.cardType === 'create cloze card') {
                inquirer.prompt({
                    name: 'text',
                    message: 'What is the full text?',
                }, {
                    name: 'cloze',
                    type: 'inpuit',
                    message: 'What is the cloze text?'
                }).then(function() {

                })
            }
        })
}