var fs = require("fs");

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
        return text.replace(cloze, "...");
    };
    this.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            partial: this.partial,
            type: "cloze"
        };
        fs.appendFile("log.txt", JSON.stringify(data) + ';', 'UTF8');
    }

    // this.check = function() {
    //     if (!text.includes(cloze)) {
    //         console.log("text does not have the cloze statement.");
    //     }
    // }

}


// brokenCloze.check();

module.exports = ClozeCard;