// Work with the DOM Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEL = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Add event listener for password generation

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEl.checked;
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
  const typesCount = lower + upper + number + symbol;

  console.log("typesCount", typesCount);
  // Filter out unchecked queries
  const typesArr = [{
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
      const funcName = Object.keys(type)[0];
      // console.log("funcName: ", funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }

  console.log(generatedPassword);

  const finalPassword = generatedPassword.slice(0, length);

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
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}