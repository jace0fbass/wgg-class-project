var startButton = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".wordblanks")

var word
var words = ["golf-ball", "par", "slice", "driver", "putter", "cart"]
// score var
// time left var

function renderChars() {
console.log(word)
for(var i = 0; i < word.length; i++) {

}
}

function startRound() {
  var randomIndex = Math.floor(Math.random() * words.length)
  word = words[randomIndex]
  renderChars()
}


startButton.addEventListener("click", startRound)

// addEventListener
