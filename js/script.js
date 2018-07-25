//checks if the the letter provided by the user matches one or more of the letters in the word
let triesLeft = 6;
var checkGuesses = function() {
  var guessValue = document.guessForm.elements["letterInput"].value; // the letter provided by the user
  var inputReset = document.guessForm.elements["letterInput"];
  guessValue = guessValue.toUpperCase();
  for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === guessValue) {
      wordArray[i] = guessValue + " ";
      var userGuess = true;
    }
    inputReset.value = "";
  }

  //deletes the guessfield and replaces it with the new one
  var guessArea = document.getElementById("guessArea");
  guessArea.innerHTML = "";
  printwordArray();

  // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list
  userLetterGuess(userGuess, guessValue);

  //checks if all letters have been found
  var guessFieldFull = true;
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === "_ ") {
      guessFieldFull = false;
    }
  }
  winner(guessFieldFull);

  //once you got six wrong letters, you lose
  looser(wrongGuess);
};

function userLetterGuess(userGuess, guessValue) {
  if (!userGuess) {
    var generateLetter = document.getElementById("generateLetter");
    var letter = document.createTextNode(" " + guessValue);
    generateLetter.appendChild(letter);
    wrongGuess++;
    triesLeft--;
    document.querySelector(".tries").innerHTML = triesLeft;
  }
}

function winner(guessFieldFull) {
  if (guessFieldFull) {
    M.toast({ html: "You Win!", classes: "rounded" });
  }
}

function looser(wrongGuess) {
  if (wrongGuess === 6) {
    M.toast({ html: "Voldemort killed you", classes: "rounded" });
  }
}

function newGame() {
  location.reload();
}

window.onload = printwordArray;

//event listeners
document.querySelector(".guessButton").addEventListener("click", checkGuesses);
document.querySelector(".newGame").addEventListener("click", newGame);
