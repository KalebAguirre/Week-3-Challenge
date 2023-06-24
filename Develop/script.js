// Assignment Code
var generateBtn = document.querySelector('#generate');

// Special Characters
var specChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Numeric Characters
var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lower Case Characters
var lCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Upper Case Characters
var uCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function 
function passwordOptions(){
  //Stores the desired length of the user's password
  var passLength = parseInt(
    prompt('How many characters would you like your password to contain? (8 Minimum, 128 Maximum)'),
    10
  );

  // Checks if the Password length is a number
  if (Number.isNaN(passLength)) {
    alert('Error: A number must be provided for Password Length.');
    return null;
  }

  // Checks if the Password length is at least 8 characters
  if (passLength < 8) {
    alert('Error: Password length must be at least 8 characters.');
    return null;
  }

  // Checks if the Password length is less than 129 characters
  if (passLength > 129) {
    alert('Error: Password length must be less than 129 characters.');
    return null;
  }

  // Asks User if they want special characters
  var hasSpecChars = confirm(
    'Click OK to include special Characters.'
  );

  // Asks User if they want Numeric characters
  var hasNumChars = confirm(
    'Click OK to include Numeric Characters.'
  );

  // Asks User if they want Lower Case Characters
  var hasLCaseChars = confirm(
    'Click OK to include Lower Case Characters'
  );

  // Asks User if they want Upper Case Characters
  var hasUCaseChars = confirm(
    'Click OK to include Upper Case Characters'
  );

  // Checks if no character types have been selected. If none have been selected, then an error message appears telling the user they need to select at least one character type to generate a password
  if (
    hasSpecChars === false &&
    hasNumChars === false &&
    hasLCaseChars === false &&
    hasUCaseChars === false
  ) {
    alert('Error: At least one character type must be selected to generate a password.')
  }

  // Stores User Inputs
  var passOptions = {
    passLength: passLength,
    hasSpecChars: hasSpecChars,
    hasNumChars: hasNumChars,
    hasLCaseChars: hasLCaseChars,
    hasUCaseChars: hasUCaseChars,
  };

  return passOptions;
}

// Grabs random elements form an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Generates a password with the user's inputs
function genPass() {
  var options = passwordOptions();

  // Stores the Password as its being created
  var result = [];

  // An array that stores the types of characters to include in the user's password
  var possibleChars = [];

  // An array used to contain one of each type of character in order to make sure each will be used
  var guaranteedChars = [];

  // Makes sure the options function still exist. If it no longer exists, exit the function.
  if(!options) return null;

  // Adds the array of Special characters to the array of possible characters if the user selected the option to add special characters
  // It then pushes a new random Special character to the array of gauranteed characters
  if (options.hasSpecChars) {
    possibleChars = possibleChars.concat(specChars);
    guaranteedChars.push(getRandom(specChars));
  }

  // Adds the array of Numeric characters to the array of possible characters if the user selected the option to add Numeric characters
  // It then pushes a new random Numeric character to the array of gauranteed characters
  if (options.hasNumChars) {
    possibleChars = possibleChars.concat(numChars);
    guaranteedChars.push(getRandom(numChars));
  }

  // Adds the array of Lower Case characters to the array of possible characters if the user selected the option to add Lower Case characters
  // It then pushes a new random Lower Case character to the array of gauranteed characters
  if (options.hasLCaseChars) {
    possibleChars = possibleChars.concat(lCaseChars);
    guaranteedChars.push(getRandom(lCaseChars));
  }

  // Adds the array of Upper Case characters to the array of possible characters if the user selected the option to add Upper Case characters
  // It then pushes a new random Upper Case character to the array of gauranteed characters
  if (options.hasUCaseChars) {
    possibleChars = possibleChars.concat(uCaseChars);
    guaranteedChars.push(getRandom(uCaseChars));
  }

  //For loop grabs a random number from the possible characters array and adds it to the result (password) over the length of the password chosen by the user
  for (var i = 0; i < options.passLength; i++) {
    var possibleCharacter = getRandom(possibleChars);

    result.push(possibleCharacter);
  }

  // Mixes in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedChars.passLength; i++) {
    result[i] = guaranteedChars[i];
  }

  //Turns the result into a string and passes it into the write password function
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = genPass();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

