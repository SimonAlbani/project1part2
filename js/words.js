//word bank for the bot to choose from
var wordBank = [
  "HARRY",
  "RON",
  "HERMIONE",
  "VOLDEMORT",
  "RUBEUS",
  "DOBBY",
  "BELLATRIX",
  "LUNA",
  "ALBUS",
  "SEVERUS",
  "WEASLEY",
  "GRINDELWALD",
  "NYMPHADORA",
  "MCGONAGALL",
  "SCAMANDER"
];
//gets a random word from the word bank
function random(word) {
  return word[Math.floor(Math.random(word) * word.length)];
}
//creates a variable to call the random function
var randomWord = random(wordBank);
//splits the randomly generated word
var wordArray = randomWord.split("");
console.log(wordArray);
var wrongGuess = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < wordArray.length; i++) {
  wordArray[i] = "_ ";
}

// prints the guessfield
function printwordArray() {
  for (var i = 0; i < wordArray.length; i++) {
    var guessArea = document.getElementById("guessArea");
    var letter = document.createTextNode(wordArray[i]);
    guessArea.appendChild(letter);
  }
}
