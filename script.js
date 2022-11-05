// Assignment code here
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialK = ['!','@','#','$','%','&'];

var passLength;
var passUpper;
var passLower;
var passNumbers;
var passSpecial;
var passCriteria = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePasswordRequirements();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomNumber(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

function randomCharacter(l) {
  return l[randomNumber(0, l.length - 1)]
}

function generatePasswordRequirements () {
  passLength = window.prompt("Enter a password length between 8-128");
  passUpper = window.confirm("Would you like to include uppercase letters?");
  passLower = window.confirm("Would you like to include lower case letters?");
  passNumbers = window.confirm("Would you like to include numbers?"); 
  passSpecial = window.confirm("Would you like to include special characters?"); 
  passwordRequirements();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordRequirements () {
  if (passLength < 8 || passLength > 128) {
    var reInput = window.confirm("Your password length was not inbetween 8 and 128. Would you like to try again?")
    if (reInput == true) {
      generatePassword();
    }}
  else {
    if (passLower === true ) {
      var choices = 1; 
    }if (passUpper === true ) {
      var choices = 1; 
    }if (passNumbers === true ) {
      var choices = 1; 
    }if (passSpecial === true ) {
      var choices = 1; 
    }
    if (choices != 1) {
      var reChoices = window.confirm("You need to select at least one criteria for your password. Would you like to start over?")
      if (reChoices == true) {
        generatePassword();
      }
    }else {
      generatePassword();
      console.log("run next function");
    }
  }
  }

  function generatePassword () {
    if (passLower === true ) {
      passCriteria.push(lowerLetters);
    }if (passUpper === true ) {
      passCriteria.push(upperLetters);
    }if (passNumbers === true ) {
      passCriteria.push(numbers);
    }if (passSpecial === true ) {
      passCriteria.push(specialK);
    }

    var tempPassword = ""; 

    for (var i = 1; i <= passLength; i++) {
      var criteria = randomCharacter(passCriteria); 
      var randomCharacterChoice = randomCharacter(criteria);

      tempPassword = tempPassword + randomCharacterChoice;
    }
    return tempPassword;
  }