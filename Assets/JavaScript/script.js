// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add the neccesary prompts and confirms for password generation

var wantNum = confirm("Would you the password to contain numbers?")

console.log(wantNum);

var wantUpperCase = confirm("Would you like the password to contain uppercase letters?")

console.log(wantUpperCase);

var wantSpecChar = confirm("Would you like the password to contain special characters?")

console.log(wantSpecChar);

var howManyChar = prompt("How long would you like the password to be?")

console.log(howManyChar);