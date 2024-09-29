// Function to generate a random password
copyBtn = document.querySelector('.copyBtn');
copyBtn.addEventListener('click', copyPassword);

function generatePassword() {
    copyBtn.className = 'block';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+';
    const allChars = uppercaseChars + lowercaseChars + digitChars + symbolChars;
    let password = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    return password;

}

// Function to update the password input field with the generated password
function updatePasswordInput() {
    const passwordInput = document.getElementById('passwordInput');
    const password = generatePassword();
    passwordInput.value = password;

}
// Function to copy the password to the clipboard
function copyPassword() {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

// Add event listener to the "Generate Password" button
document.getElementById('generateBtn').addEventListener('click', updatePasswordInput);

// Add event listener to the "Copy" button
