// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generates a password based on a series of prompts
function generatePassword(){

  //prompts for password length
  var pwdLength = prompt("How many characters do you want your password? (Must be at least 8 and no more than 128)");
  
  //error checks for wrong input
  for(;pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength);)
  {
    alert("Input error, try again.");
    pwdLength = prompt("How many characters do you want your password? (Must be at least 8 and no more than 128)");
  }

  //prompts for password character types
  var pwdLowercase = confirm("Do you want lowercase letters?");
  var pwdUppercase = confirm("Do you want uppercase letters?");
  var pwdNumeric = confirm("Do you want numeric characters?");
  var pwdSpecial = confirm("Do you want special characters?");

  //error checks for at least 1 character type
  for(;pwdLowercase !== true && pwdUppercase !== true && pwdNumeric !== true && pwdSpecial !== true;)
  {
    alert("At least one character type should be selected, try again.");
    pwdLowercase = confirm("Do you want lowercase letters?");
    pwdUppercase = confirm("Do you want uppercase letters?");
    pwdNumeric = confirm("Do you want numeric characters?");
    pwdSpecial = confirm("Do you want special characters?");
  }


  //declared arrays of each character type that will be used to generate the password
  var lowerArray = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
  var upperArray = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //for special array the char " must be defined using "\"" and \ with "\\"
  var specialArray = [" ", "!","\"", "#", "$", "%", "&", "'", "(", ")", "*", "+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{", "|", "}", "~"];
  //empty array that will generate the password
  var generatedPwd = [];
  //index that will randomly change to grab from character type arrays
  var index = 0;

  /*
  IMPORTANT:
  This method was designed to improve randomness but was scrapped 
  to avoid the off chance the password didn't used all of the accepted character types.

  creates one array containing all possible characters that can be used in the password
  based on the prompts of the character types.
  
  var charResevior = [];
  if(pwdLowercase)
  {
    for(let i = 0; i < lowerArray.length; i++)
    {
      charResevior.push(lowerArray[i]);
    }
  }
  if(pwdUppercase)
  {
    for(let i = 0; i < upperArray.length; i++)
    {
      charResevior.push(upperArray[i]);
    }
  }
  if(pwdNumeric)
  {
    for(let i = 0; i < numericArray.length; i++)
    {
      charResevior.push(numericArray[i]);
    }
  }
  if(pwdSpecial)
  {
    for(let i = 0; i < specialArray.length; i++)
    {
      charResevior.push(specialArray[i]);
    }
  }
  
  for(let iterator = 0; iterator < pwdLength; iterator++)
  {
    index = Math.floor(Math.random()*charResevior.length);
    generatedPwd.push(charResevior[index]);
  }
*/

  //checks each character type based on prompts
  //randomly chooses an index to grab from character type array 
  //pushes the generatedPwd array to add a character to the generated password
  //added a condition in if statements to avoid overstacking the generated password
  for(let iterator = 0; iterator < pwdLength;)
  {

    if(pwdLowercase && iterator < pwdLength)
    {
      
        index = Math.floor(Math.random()*lowerArray.length);
        generatedPwd.push(lowerArray[index]);
        iterator++;
    }
    if(pwdUppercase && iterator < pwdLength)
    {
      index = Math.floor(Math.random()*upperArray.length);
      generatedPwd.push(upperArray[index]);
      iterator++;
    }
    if(pwdNumeric && iterator < pwdLength)
    {
      index = Math.floor(Math.random()*numericArray.length);
      generatedPwd.push(numericArray[index]);
      iterator++;
    }
    if(pwdSpecial && iterator < pwdLength)
    {
      index = Math.floor(Math.random()*specialArray.length);
      generatedPwd.push(specialArray[index]);
      iterator++;
    }
  }

  //string that grabs all elements of the generated password to display
  var tempPwd = "";
    for(let i = 0; i < generatedPwd.length; i++)
    {
     tempPwd = tempPwd + generatedPwd[i];
    }
  
  //password is returned and displayed on teh webpage
  return tempPwd;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
