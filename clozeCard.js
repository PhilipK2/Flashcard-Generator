function ClozeCard(text, cloze) {
    this.fulltext = text;
    this.cloze = cloze;
    this.partial = function() {
        return text.replace(cloze, "...");
    };
    this.check = function() {
        if (!text.includes(cloze)) {
            console.log("text does not have the cloze statement.");
        }
    }

}




var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");

brokenCloze.check();

module.exports = ClozeCard;