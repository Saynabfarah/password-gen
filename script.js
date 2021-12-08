// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '1234567890'
var special = '!@#$%^&*()_+=-[]{}\:"<>?,./'

function generatePassword() {
  var password = ''
  var characters = ''

  var pwdLength = prompt('Between 8 and 128 how long would you like your password to be?')
  while (pwdLength < 8 || pwdLength > 128) {
    alert('Your password must be a number between 8 and 128 characters long.')
    pwdLength = prompt('Between 8 and 128 how long would you like your password to be?')
  }

  var wantsUpper = confirm('Would you like uppercase letters?')
  var wantsLower = confirm('Would you like lowercase letters?')
  var wantsNumbers = confirm('Would you like to have numbers?')
  var wantsSpecial = confirm('Would you like to have special characters?')

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one character type.')
    wantsUpper = confirm('Would you like uppercase letters?')
    wantsLower = confirm('Would you like lowercase letters?')
    wantsNumbers = confirm('Would you like to have numbers?')
    wantsSpecial = confirm('Would you like to have special characters?')
  }

  // if wantsUpper is equal to true, then we are adding all of the uppercase letters to the characters variable
  if (wantsUpper === true) {
    characters += uppercase
  }
  if (wantsLower === true) {
    characters += lowercase
  }
  if (wantsNumbers === true) {
    characters += numbers
  }
  if (wantsSpecial === true) {
    characters += special
  }

  console.log(characters)

  for (var i = 0; i < pwdLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
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
