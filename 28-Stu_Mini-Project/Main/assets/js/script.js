var startButton = document.querySelector(".start-button")
var wordBlanksEl = document.querySelector(".word-blanks")
var scoreEl = document.querySelector(".score")
var timerEl = document.querySelector(".timer-count")

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["golf-ball", "par", "slice", "driver", "putter", "cart"]
var word
var guessedChars = []
var score = 0
var timeLeft = 15
var intervalId
// score var
// time left var
function startCountdown() {
  clearInterval(intervalId)
  intervalId = setInterval(function() {
    timeLeft--
    timerEl.textContent = timeLeft
    if (timeLeft === 0) {
      clearInterval(intervalId)
    wordBlanksEl.innerText = "Game over! Your score is " + score
  }
  }, 1000)
}

function checkWord() {
  var wordFromDOM = wordBlanksEl.textContent.split(" ").join(" ")
  if (word === wordFromDOM) {
    score++
    scoreEl.textContent = score
    startRound()
  }
}

function handleKeydown(event) {
if (validChars.includes(event.key)) {
guessedChars.push(event.key)
renderCharacters()
  }
}

function renderChars() {
  var string = ""
for (var i = 0; i < word.length; i++) {
  var letter = word[i]
  if (guessedChars.includes(letter) ) {
    string += letter + " "
  } else { 
  string += "_ "
  }
}
wordBlanksEl.textContent = string.trim()
checkWord()
}

function startRound() {
  guessedChars = []
  var randomIndex = Math.floor(Math.random() * words.length)
  word = words[randomIndex]
  renderChars()
  startCountdown()
}


startButton.addEventListener("click", startRound)

document.addEventListener("keydown", handleKeydown)
// addEventListener
