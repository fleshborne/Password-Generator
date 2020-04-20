// Work with the DOM Elements
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEL = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

// setting my variables
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener for password generation

generateEl.addEventListener("click", () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEL.checked;
  var hasSymbol = symbolsEl.checked;
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );

});
// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
  // intialize password generation
  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;

  console.log("typesCount", typesCount);
  // Filter out unchecked queries
  var typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(
    item => Object.values(item)[0]
  );
  console.log("typesArr", typesArr);

  if (typesCount === 0) {
    return "";

  }
  // Loop over the length of the array for each type of attribute selected

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      // console.log("funcName: ", funcName);
      generatedPassword += randomFunc[funcName]();

    });
  }
  console.log(generatedPassword);

  // since index starts at 0, if user wants a 1 character pass word this will allow it, however outside of the scope of acceptance criteria, it is dynamic and will make a password of any given length given in input box

  var finalPassword = generatedPassword.slice(0, length)

  alert("This is your password: " + finalPassword);
  return finalPassword

}
// Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

