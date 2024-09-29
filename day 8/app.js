














































// Variables:
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const content = document.querySelector(".content");
const contentChild = document.querySelector(".content span");
const requirementList = document.querySelectorAll(".requirement-list li");
const saveButton = document.querySelector(".save-button");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];

// Function to determine password strength
function getPasswordStrength(password) {
    let strength = 0;
    requirements.forEach(item => {
        if (item.regex.test(password)) {
            strength++;
        }
    });
    return strength;
}

// Function to update the password strength message
function updatePasswordStrengthMessage(passwordStrength) {
    let message = '';
    switch (passwordStrength) {
        case 0:
            message = 'Very Weak';
            break;
        case 1:
            message = 'Weak';
            break;
        case 2:
            message = 'Moderate';
            break;
        case 3:
            message = 'good';
            break;
        case 4:
            message = ' Strong';
            break;
        default:
            message = 'Very Strong';
    }
    contentChild.textContent = `Password Strength: ${message}`;

    // Show the save button if password meets all requirements
    if (passwordStrength === requirements.length) {
        saveButton.style.display = 'block';
    } else {
        saveButton.style.display = 'none';
    }
}

// Display initial password strength and hide the save button
updatePasswordStrengthMessage(0);
saveButton.style.display = 'none';

// Event listener for key press events
passwordInput.addEventListener("keyup", (e) => {
    // Reset content class
    content.className = 'cont';

    // Check password strength and update message
    const passwordStrength = getPasswordStrength(e.target.value);
    updatePasswordStrengthMessage(passwordStrength);

    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

// Event listener for the "eye" icon to toggle password visibility
eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

saveButton.addEventListener('click',()=>{
    location.reload()
})