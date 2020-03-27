// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pass = "";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var options = "";

  var length = prompt("How long would you like your password to be?(8-128)");
  while (length < 8 || length > 128) {
    var length = prompt("Your password must be between 8 and 128 characters");
  }

  do {
  var addLower = confirm("Include lowercase letters?");
  var addCaps = confirm("Include capital letters?");
  var addNumbers = confirm("Include numbers?");
  var addSpecial = confirm("Include special characters?");

    if (addLower) {
      options += lower;
    }
    if (addCaps) {
      options += upper;
    }
    if (addNumbers) {
      options += numbers;
    }
    if (addSpecial) {
      options += special;
    }
    if (options === "") {
      alert("You must select at least one option.");
    }
  } while (options === "");

  for (var i = 0; i < length; i++) {
    pass += options[Math.floor(Math.random() * options.length)];
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);