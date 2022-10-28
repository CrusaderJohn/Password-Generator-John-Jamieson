// Assignment code here
function generatePassword() {
  // Arrays containing possible password characters
  let specialArray = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")
  let lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let upperArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let numericArray = '0123456789'.split("");
  let characterSelection = [];

  // Object containing all the details of the password
  let passwordObject = {
    passwordArray: [],
    passwordLength: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacters: false
  };

  // Popup alert that lets the user know some questions will be asked
  window.alert("Prepare to answer a few questions about your new password!");

  // Password length question with user input validation (asks the user again if the input is not a number or out of range)
  passwordObject.passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  while (isNaN(Number(passwordObject.passwordLength))
        || passwordObject.passwordLength < 8
        || passwordObject.passwordLength > 128)
  {
    passwordObject.passwordLength = prompt("Try again!\nChoose a length of at least 8 characters and no more than 128 characters");
  }

  // Password character type question with user input validation (asks the user again if the input is all false)
  passwordObject.lowercase = window.confirm("Do you want one or more lowercase characters in your password?");
  passwordObject.uppercase = window.confirm("Do you want one or more uppercase characters in your password?");
  passwordObject.numeric = window.confirm("Do you want one or more numeric characters in your password?");
  passwordObject.specialCharacters = window.confirm("Do you want one or more special characters in your password?");
  while (!(passwordObject.lowercase
      || passwordObject.uppercase
      || passwordObject.numeric
      || passwordObject.specialCharacters))
  {
    window.alert("At least one of the four must be selected!");
    passwordObject.lowercase = window.confirm("Do you want one or more lowercase characters in your password?");
    passwordObject.uppercase = window.confirm("Do you want one or more uppercase characters in your password?");
    passwordObject.numeric = window.confirm("Do you want one or more numeric characters in your password?");
    passwordObject.specialCharacters = window.confirm("Do you want one or more special characters in your password?");
  }

  // These if statements generate the final array the password will be generated from (characterSelection)
  if (passwordObject.lowercase)
  {
    characterSelection = characterSelection.concat(lowerArray);
  }
  if (passwordObject.uppercase)
  {
    characterSelection = characterSelection.concat(upperArray);
  }
  if (passwordObject.numeric)
  {
    characterSelection = characterSelection.concat(numericArray);
  }
  if (passwordObject.specialCharacters)
  {
    characterSelection = characterSelection.concat(specialArray);
  }

  // for loop to randomly generate a single character for each index/length of the password
  for (let i = 0; i < passwordObject.passwordLength; i++) {
    passwordObject.passwordArray[i] = characterSelection[Math.floor(Math.random() * characterSelection.length)];
  }

  // Popup letting the user know the password is ready
  window.alert("Get ready for your new password!");

  // Returns the password as a string instead of the array
  return passwordObject.passwordArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
