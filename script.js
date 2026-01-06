// DOM Elements 
const resultEl = document.getElementById('passwordResult');
const lengthEl = document.getElementById('lengthInput');
const lengthVal = document.getElementById('lengthValue');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const errorMsg = document.getElementById('errorMessage');

// Character Sets [cite: 56, 57, 58, 59]
const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Sync Slider Value with Text Display [cite: 53]
lengthEl.addEventListener('input', () => {
    lengthVal.innerText = lengthEl.value;
});

// Main Generation Function [cite: 61]
function generatePassword() {
    let charset = "";
    let password = "";

    // Build character pool based on user selection [cite: 50]
    if (uppercaseEl.checked) charset += keys.upper;
    if (lowercaseEl.checked) charset += keys.lower;
    if (numbersEl.checked) charset += keys.number;
    if (symbolsEl.checked) charset += keys.symbol;

    // Warning message for empty selection
    if (charset === "") {
        errorMsg.classList.remove('hidden');
        resultEl.value = "";
        return;
    }

    errorMsg.classList.add('hidden');

    // Randomization Logic [cite: 50]
    for (let i = 0; i < lengthEl.value; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Display the generated password [cite: 62]
    resultEl.value = password;
}

// Button Click Event [cite: 61]
generateBtn.addEventListener('click', generatePassword);

// Generate one immediately on page load
generatePassword();