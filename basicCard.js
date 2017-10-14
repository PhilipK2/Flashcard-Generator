var fs = require("fs");

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        var data = {
            front: this.front,
            back: this.back,
            type: "basic"
        };
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "UTF8");
    }
}

module.exports = BasicCard;