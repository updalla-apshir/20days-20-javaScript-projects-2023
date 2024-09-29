document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input-field');
    const charCount = document.getElementById('char-count');
    const maxLength = 100;

    inputField.addEventListener('input', function() {
        const inputLength = this.value.length;


        const adjustedLength = inputLength <= maxLength ? inputLength : maxLength;

        charCount.textContent = `${adjustedLength} / ${maxLength}`;

        if (inputLength > maxLength) {
            inputField.classList.add('error');
            this.value = this.value.substring(0, maxLength); 
            charCount.classList.add('charError');
        } else {
            inputField.classList.remove('error');
            charCount.classList.remove('charError')

        }
    });

    charCount.textContent = `0 / ${maxLength}`;
});