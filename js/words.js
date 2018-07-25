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
  
  function random(word) {
    return word[Math.floor(Math.random(word) * word.length)];
  }
  
  var randomWord = random(wordBank);
  
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