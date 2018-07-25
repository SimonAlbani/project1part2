//checks if the the letter provided by the user matches one or more of the letters in the word
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
  }
}

function winner(guessFieldFull) {
  if (guessFieldFull) {
    window.alert("You win! you guessed " + randomWord);
  }
}

function looser(wrongGuess) {
  if (wrongGuess === 6) {
    window.alert("The Death Eaters got you!");
  }
}

function newGame() {
  location.reload();
}

window.onload = printwordArray;

//event listeners
document.querySelector(".guessButton").addEventListener("click", checkGuesses);
document.querySelector(".newGame").addEventListener("click", newGame);
