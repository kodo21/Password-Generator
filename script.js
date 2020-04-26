//Assignment Code
var generateBtn = document.querySelector("#generate");
const showPassword = document.querySelector("#password");
var stuff = [getRandomNumber(), getRandomLower(), getRandomUpper(), getRandomSymbol()];
var testing = [];
var  caseCheck = 4;
var temp = 0;
var passwordText;
var num;
var low;
var up;
var spec;
var toast;
var toast1;
var toast2;
var toast3;

function writePassword() {
  
  var password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
document.getElementById("generate").addEventListener("click", function()
{
 writePassword();
});
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString();
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toString();
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toString();
}
function getRandomSymbol() {
  var symbols = ["!", "@","#","$", "%", "^", "&", "*"];
  //console.log(symbols.indexOf("@") + "@");
  return symbols[Math.floor(Math.random() * symbols.length ).toString()]
}

// Add event listener to generate button


function generatePassword()
{

console.log(testing +" testing ");
console.log(testing.length +" testing ");

testing.length = prompt("Please enter the number of characters you want for you new password.  It must be 8-128.");

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

console.log(caseCheck + " caseCheck");
console.log(numbers + lowerCases + upperCases + special + " true or null ");

if(!numbers && !lowerCases && !upperCases && !special){
  alert("Must choose one type password case.");
  testing.length =  null;
}
console.log(num + "-num "+ low + "-low "+ up +"-up "+ spec +"-spec")
}

else if(testing.length  < 8 || testing.length > 128 ){{alert("Must be a number 8-128");testing.length = null;}}
//end of alerts

temp = 0; // this resets value

for (var i = testing.length ; i > 0 ;i--)
{
  stuff = [getRandomNumber(), getRandomLower(), getRandomUpper(), getRandomSymbol()];
  console.log("working?");
  
  
  
 var dynamicIndex = 0;
  if(!num)
  {
    toast = stuff[0];
    stuff.splice(stuff.indexOf(toast), 1);
   
    dynamicIndex = 0;
  }else{dynamicIndex++}
  if(!low)
  {
    toast1 = stuff[dynamicIndex];
    stuff.splice(stuff.indexOf(toast1), 1);

  }
  else{dynamicIndex++}
  if(!up)
  {
    toast2 = stuff[dynamicIndex];
    stuff.splice(stuff.indexOf(toast2), 1);
    
  }
  else{dynamicIndex++}
  if(!spec)
  {
    toast3 = stuff[dynamicIndex];
    stuff.splice(stuff.indexOf(toast3), 1);
  }
  console.log(num + "-num "+ low + "-low "+ up +"-up "+ spec +"-spec")
  console.log(stuff);

console.log(stuff[0] + stuff[1] + stuff[2]+ stuff[3]);
  var randomNumberPicked = Math.floor(Math.random() * caseCheck);
  //var trial = stuff[randomNumberPicked];
    testing[temp] = stuff[randomNumberPicked];
    temp++;
    console.log(randomNumberPicked);
}
return testing.join("");
}
// for (var i = testing.length ; i > 0 ;i--){
//   //console.log("working?");
//   var randomNumberPicked = Math.floor(Math.random() * caseCheck);
//   //console.log(caseCheck + " caseCheck");
//   if(num && low && up && spec)
//   { if(randomNumberPicked === 3)
//     { 
//       testing[temp] = getRandomNumber();
//       temp++;
//     }
//     else if(randomNumberPicked === 2)
//     { 
//       testing[temp] = getRandomLower();
//       temp++;
//     }
//     else if(randomNumberPicked === 1)
//     { 
//       testing[temp] = getRandomUpper();
//       temp++;
//     }
//     else if(randomNumberPicked === 0)
//     { 
//       testing[temp] = getRandomSymbol();
//       temp++;
//     }
//   }//end
//   else if(num && low && up && !spec){
   
//     if(randomNumberPicked === 2)
//     { 
//       testing[temp] = getRandomLower();
//       temp++;
//     }
//     else if(randomNumberPicked === 1)
//     { 
//       testing[temp] = getRandomUpper();
//       temp++;
//     }
//     else if(randomNumberPicked === 0)
//     { 
//       testing[temp] = getRandomNumber();
//       temp++;
//     }
//   }//end
//     else if(num && low && !up && spec){
   
//       if(randomNumberPicked === 2)
//       { 
//         testing[temp] = getRandomLower();
//         temp++;
//       }
//       else if(randomNumberPicked === 1)
//       { 
//         testing[temp] = getRandomSymbol();
//         temp++;
//       }
//       else if(randomNumberPicked === 0)
//       { 
//         testing[temp] = getRandomNumber();
//         temp++;
//       }
//     }//end
//     else if(num && !low && up && spec){
   
//       if(randomNumberPicked === 2)
//       { 
//         testing[temp] = getRandomUpper();
//         temp++;
//       }
//       else if(randomNumberPicked === 1)
//       { 
//         testing[temp] = getRandomSymbol();
//         temp++;
//       }
//       else if(randomNumberPicked === 0)
//       { 
//         testing[temp] = getRandomNumber();
//         temp++;
//       }
//     }//end
//     else if(!num && low && up && spec){
   
//       if(randomNumberPicked === 2)
//       { 
//         testing[temp] = getRandomUpper();
//         temp++;
//       }
//       else if(randomNumberPicked === 1)
//       { 
//         testing[temp] = getRandomSymbol();
//         temp++;
//       }
//       else if(randomNumberPicked === 0)
//       { 
//         testing[temp] = getRandomLower();
//         temp++;
//       }
//     }//end
//     else if(!num && !low && up && spec){
   
//        if(randomNumberPicked === 1)
//       { 
//         testing[temp] = getRandomSymbol();
//         temp++;
//       }
//       else if(randomNumberPicked === 0)
//       { 
//         testing[temp] = getRandomUpper();
//         temp++;
//       }
//     }//end
//     else if(num && low && !up && !spec){
   
//       if(randomNumberPicked === 1)
//      { 
//        testing[temp] = getRandomNumber();
//        temp++;
//      }
//      else if(randomNumberPicked === 0)
//      { 
//        testing[temp] = getRandomLower();
//        temp++;
//      }
//    }//end
//    else if(!num && low && up && !spec){
   
//     if(randomNumberPicked === 1)
//    { 
//      testing[temp] = getRandomUpper();
//      temp++;
//    }
//    else if(randomNumberPicked === 0)
//    { 
//      testing[temp] = getRandomLower();
//      temp++;
//    }
//  }//end
//  else if(num && !low && !up && spec){
   
//   if(randomNumberPicked === 1)
//  { 
//    testing[temp] = getRandomNumber();
//    temp++;
//  }
//  else if(randomNumberPicked === 0)
//  { 
//    testing[temp] = getRandomSymbol();
//    temp++;
//  }
// }//end
// else if(!num && low && !up && spec){
   
//   if(randomNumberPicked === 1)
//  { 
//    testing[temp] = getRandomLower();
//    temp++;
//  }
//  else if(randomNumberPicked === 0)
//  { 
//    testing[temp] = getRandomSymbol();
//    temp++;
//  }
// }//end
// else if(num && !low && up && !spec){
   
//   if(randomNumberPicked === 1)
//  { 
//    testing[temp] = getRandomNumber();
//    temp++;
//  }
//  else if(randomNumberPicked === 0)
//  { 
//    testing[temp] = getRandomUpper();
//    temp++;
//  }
// }//end
// //start singles
// else if(!num && !low && !up && spec){
   
// if(randomNumberPicked === 0)
//  { 
//    testing[temp] = getRandomSymbol();
//    temp++;
//  }
// }//end
// else if(!num && !low && up && !spec){
   
// if(randomNumberPicked === 0)
//  { 
//    testing[temp] = getRandomUpper();
//    temp++;
//  }
// }//end
// else if(!num && low && !up && !spec){
   
//   if(randomNumberPicked === 0)
//    { 
//      testing[temp] = getRandomLower();
//      temp++;
//    }
//   }//end
// else if(num && !low && !up && !spec){
   
//   if(randomNumberPicked === 0)
//     { 
//        testing[temp] = getRandomNumber();
//        temp++;
//     }
//   }//end
