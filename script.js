// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '1234567890'
var special = '!@#$%^&*()_+=-[]{}\|;:"<>?,./'

function generatePassword() {
  var password = ''

  var pwdLength = prompt('Between 8 and 128 how long would you like your password to be?')
  while (pwdLength < 8 || pwdLength > 128) {
    alert('Your password must be a number between 8 and 128 characters long.')
    pwdLength = prompt('Between 8 and 128 how long would you like your password to be?')
  }

  


  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
