//Assignment Code
var generateBtn = document.querySelector("#generate");
const showPassword = document.querySelector("#password");
// var stuff = 
// {
//   lowercase : ["a", ],
//   uppercase : {},
//   numeric : {},
//   specialCharacters: {}
// };
var testing = [];
var symbols = ["!", "@","#","$", "%", "^", "&", "*"];
var  caseCheck = 4;
var temp = 0;
var passwordText;
var num;
var low;
var up;
var spec;


//Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//testtest();
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", function()
{ 

 writePassword();
});

function generatePassword()
{
//stesting = [];
 
  //testing.length = charInput;

console.log(testing +" testing ");
console.log(testing.length +" testing ");


testing.length = prompt("Please enter the number of characters you want for you new password.  It must be more than 8-128.");
//testing.length = null;
  console.log(testing.length + " password length");
if(testing.length > 7 && testing.length < 129)
{
  caseCheck = 4;
  var numbers = confirm("Do you want numbers in your password?");//3
if (!numbers){ num = false; caseCheck--;}
else {num = true;}
  var lowerCases = confirm("Do you want lowercases in your password?");
  if (!lowerCases){ low = false;caseCheck--;}
else {low = true;}
  var upperCases = confirm("Do you want uppercases in your password?");
  if (!upperCases){ up = false;caseCheck--;}
else {up = true;}
  var special = confirm("Do you want special characters in your password?");
  if (!special){ spec = false;caseCheck--;}
else {spec = true;}
  console.log(numbers + lowerCases + upperCases + special + " true or null ");
if(!numbers && !lowerCases && !upperCases && !special){
  alert("Must choose one type password case.");
testing.length =  null;
}
console.log(num + "-num "+ low + "-low "+ up +"-up "+ spec +"-spec")
}
else if(testing.length  < 8 || testing.length > 128 ){{alert("Must be a number greater than 7 or less than 129");testing.length = null;}}
temp = 0;
for (var i = testing.length ; i > 0 ;i--){
  console.log("working?");
  var randomNumberPicked = Math.floor(Math.random() * caseCheck);
  if(num && low && up && spec)
  { if(randomNumberPicked === 3)
    { 
      testing[temp] = getRandomNumber();
      temp++;
    }
    else if(randomNumberPicked === 2)
    { 
      testing[temp] = getRandomLower();
      temp++;
    }
    else if(randomNumberPicked === 1)
    { 
      testing[temp] = getRandomUpper();
      temp++;
    }
    else if(randomNumberPicked === 0)
    { 
      testing[temp] = getRandomSymbol();
      temp++;
    }
  }//end
  else if(num && low && up && !spec){
   
    if(randomNumberPicked === 2)
    { 
      testing[temp] = getRandomLower();
      temp++;
    }
    else if(randomNumberPicked === 1)
    { 
      testing[temp] = getRandomUpper();
      temp++;
    }
    else if(randomNumberPicked === 0)
    { 
      testing[temp] = getRandomNumber();
      temp++;
    }
  }//end
    else if(num && low && !up && spec){
   
      if(randomNumberPicked === 2)
      { 
        testing[temp] = getRandomLower();
        temp++;
      }
      else if(randomNumberPicked === 1)
      { 
        testing[temp] = getRandomSymbol();
        temp++;
      }
      else if(randomNumberPicked === 0)
      { 
        testing[temp] = getRandomNumber();
        temp++;
      }
    }//end
    else if(num && !low && up && spec){
   
      if(randomNumberPicked === 2)
      { 
        testing[temp] = getRandomUpper();
        temp++;
      }
      else if(randomNumberPicked === 1)
      { 
        testing[temp] = getRandomSymbol();
        temp++;
      }
      else if(randomNumberPicked === 0)
      { 
        testing[temp] = getRandomNumber();
        temp++;
      }
    }//end
    else if(!num && low && up && spec){
   
      if(randomNumberPicked === 2)
      { 
        testing[temp] = getRandomUpper();
        temp++;
      }
      else if(randomNumberPicked === 1)
      { 
        testing[temp] = getRandomSymbol();
        temp++;
      }
      else if(randomNumberPicked === 0)
      { 
        testing[temp] = getRandomLower();
        temp++;
      }
    }//end
    else if(!num && !low && up && spec){
   
       if(randomNumberPicked === 1)
      { 
        testing[temp] = getRandomSymbol();
        temp++;
      }
      else if(randomNumberPicked === 0)
      { 
        testing[temp] = getRandomUpper();
        temp++;
      }
    }//end
    else if(num && low && !up && !spec){
   
      if(randomNumberPicked === 1)
     { 
       testing[temp] = getRandomNumber();
       temp++;
     }
     else if(randomNumberPicked === 0)
     { 
       testing[temp] = getRandomLower();
       temp++;
     }
   }//end
   else if(!num && low && up && !spec){
   
    if(randomNumberPicked === 1)
   { 
     testing[temp] = getRandomUpper();
     temp++;
   }
   else if(randomNumberPicked === 0)
   { 
     testing[temp] = getRandomLower();
     temp++;
   }
 }//end
 else if(num && !low && !up && spec){
   
  if(randomNumberPicked === 1)
 { 
   testing[temp] = getRandomNumber();
   temp++;
 }
 else if(randomNumberPicked === 0)
 { 
   testing[temp] = getRandomSymbol();
   temp++;
 }
}//end
else if(!num && low && !up && spec){
   
  if(randomNumberPicked === 1)
 { 
   testing[temp] = getRandomLower();
   temp++;
 }
 else if(randomNumberPicked === 0)
 { 
   testing[temp] = getRandomSymbol();
   temp++;
 }
}//end
else if(num && !low && up && !spec){
   
  if(randomNumberPicked === 1)
 { 
   testing[temp] = getRandomNumber();
   temp++;
 }
 else if(randomNumberPicked === 0)
 { 
   testing[temp] = getRandomUpper();
   temp++;
 }
}//end
//start singles
else if(!num && !low && !up && spec){
   
if(randomNumberPicked === 0)
 { 
   testing[temp] = getRandomSymbol();
   temp++;
 }
}//end
else if(!num && !low && up && !spec){
   
if(randomNumberPicked === 0)
 { 
   testing[temp] = getRandomUpper();
   temp++;
 }
}//end
else if(!num && low && !up && !spec){
   
  if(randomNumberPicked === 0)
   { 
     testing[temp] = getRandomLower();
     temp++;
   }
  }//end
else if(num && !low && !up && !spec){
   
  if(randomNumberPicked === 0)
    { 
       testing[temp] = getRandomNumber();
       temp++;
    }
  }//end
    
 
}
console.log(temp);
console.log(testing.length);
    return testing;
}

// function testtest() {
  
  
//   testing.length = charInput;
//   console.log(charInput);
//   console.log(testing);
//   console.log(temp);
//   for (var i = charInput ; i > 0 ;i--){
//     console.log("working?");
//     testing[temp] = getRandomUpper();
//     temp++;
//   }
//   return testing;
// }
function randomolder(){

  randomNumber.Math.floor(Math.random() * 4) + 1;
  console.log(randomNumber);

if(randomNumber === 1){
  getRandomLower();
}
if(randomNumber === 2){
  getRandomUpper();
}
if(randomNumber === 3){
  getRandomNumber();
}
if(randomNumber === 4){
  getRandomSymbol();
}
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toString();
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toString();
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString();
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length ).toString()]
}
