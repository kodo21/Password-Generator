// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateBtn = document.querySelector("#generate");
document.getElementById("generate").addEventListener("click", function()
{ 
 writePassword();
});

// Write password to the #password input
function writePassword() {
  console.log("test");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8-128.");
  console.log(passwordLength);
if(passwordLength > 7 && passwordLength < 129)
{
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");
  console.log(numbers + lowerCases + upperCases + special);
if(!numbers && !lowerCases && !upperCases && !special){
  alert("Must choose one type password case.");

}}
//else if(passwordLength === 7 || 129 ){{alert("Must be a number greater than 7 or less than 129");}}

else
{alert("Must be a number greater than 7 or less than 129");}


  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  
};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
    console.log(minimumCount);
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
    console.log(minimumCount);
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
    console.log(minimumCount);
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
    console.log(minimumCount);
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // !numbers && !lowerCases && !upperCases && !special
  //loop getting random characters
  if(passwordLength > 7 && passwordLength < 129 )
  {
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }
}
  

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}



//////////////////////////// older code


// //Assignment Code
// var generateBtn = document.querySelector("#generate");
// var showPassword = document.querySelector("#password");
// // var stuff = 
// // {
// //   lowercase : ["a", ],
// //   uppercase : {},
// //   numeric : {},
// //   specialCharacters: {}
// // };
// var testing = [];
// var charNum = 0;
// var charNumMin = 8;
// var charNumMax = 128;
// var symbols = ["!", "@","#","$", "%", "^", "&", "*"];
// //showPassword.innerHTML = "test";
// var charInput = 8;
// var temp = 0;
// var reset;
// var passwordText;
// var randomNumber =

// // Write password to the #password input
// function writePassword() {
  
//   var password = generatePassword();
//   passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// //testtest();
// // Add event listener to generate button
// document.getElementById("generate").addEventListener("click", function()
// { 
//  writePassword();
// });

// function generatePassword()
// {
//   //testing  testing = [];
//  // testing.splice(0, testing.length);
//   testing.length = charInput;
// console.log(testing);
// for (var i = charInput ; i > 0 ;i--){
//   console.log("working?");
//   testing[temp] = randomHolder();
//   temp++;
// }

//     return testing;
// }

// // function testtest() {
  
  
// //   testing.length = charInput;
// //   console.log(charInput);
// //   console.log(testing);
// //   console.log(temp);
// //   for (var i = charInput ; i > 0 ;i--){
// //     console.log("working?");
// //     testing[temp] = getRandomUpper();
// //     temp++;
// //   }
// //   return testing;
// // }
// function randomHolder(){

//   randomNumber.Math.floor(Math.random() * 4) + 1;
//   console.log(randomNumber);

// if(randomNumber === 1){
//   getRandomLower();
// }
// if(randomNumber === 2){
//   getRandomUpper();
// }
// if(randomNumber === 3){
//   getRandomNumber();
// }
// if(randomNumber === 4){
//   getRandomSymbol();
// }
// }
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   return symbols[Math.floor(Math.random() * symbols.length )]
// }
