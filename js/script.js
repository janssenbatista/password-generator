// DOM ELEMENTS
const $passwordInput = document.querySelector("#password-input");
const $copyButton = document.querySelector("#copy-button");
const $passwordLenghtInput = document.querySelector("#password-lenght-input");
const $generatePasswordButton = document.querySelector(
  "#generate-password-button"
);
const $uppercaseCheckbox = document.querySelector("#cbUpperCase");
const $lowercaseCheckbox = document.querySelector("#cbLowerCase");
const $numberCheckbox = document.querySelector("#cbNumbers");
const $symbolCheckbox = document.querySelector("#cbSymbols");

// Variables
let functions = [];

// Listeners
$generatePasswordButton.addEventListener("click", () => {
  setupFunctions();
  $passwordInput.value = generatePassword();
  functions = [];
});

$copyButton.addEventListener("click", () => {
  copyToClipboard();
});

// Functions
function generateUpperCase() {
  const letterCode = Number.parseInt(Math.random() * 26 + 65);
  return String.fromCharCode(letterCode);
}

function generateLowerCase() {
  const letterCode = Number.parseInt(Math.random() * 26 + 97);
  return String.fromCharCode(letterCode);
}

function generateNumber() {
  return Number.parseInt(Math.random() * 10);
}

function generateSymbol() {
  let symbols = "!@#$%&*^";
  let symbolPosition = Number.parseInt(Math.random() * symbols.length);
  return symbols.charAt(symbolPosition);
}

function setupFunctions() {
  if ($uppercaseCheckbox.checked) functions.push(generateUpperCase);
  if ($lowercaseCheckbox.checked) functions.push(generateLowerCase);
  if ($numberCheckbox.checked) functions.push(generateNumber);
  if ($symbolCheckbox.checked) functions.push(generateSymbol);
}

function generatePassword() {
  let password = "";
  const length = Number.parseInt($passwordLenghtInput.value);
  for (let index = 0; index < length; index++) {
    let funcPosition = Number.parseInt(Math.random() * functions.length);
    password += functions[funcPosition]();
  }
  return password;
}

function copyToClipboard() {
  navigator.clipboard.writeText($passwordInput.value);
  $copyButton.textContent = "Copied";
  $copyButton.disabled = true;
  setInterval(() => {
    $copyButton.textContent = "Copy";
    $copyButton.disabled = false;
  }, 2000);
}
