
const words = ["shaah", "bariis", "caano", "baasto", "bakeeri", "qalin", "macalin", "Qaando", "madaxweyne", "wasiir", "xildhibaan", "school", "shaqo", "xamar", "fargeeto", "joodari", "sariir"];
const chosenWord = words[Math.floor(Math.random() * words.length)].trim().toLowerCase();
const revealedPart = chosenWord.slice(0, Math.ceil(chosenWord.length / 2));
let guessedLetters = Array(revealedPart.length).fill("_");
let remainingLetters = chosenWord.length - revealedPart.length;
let chances = 3;

// UI Elements:
const guessedWordDisplay = document.querySelector('.guessed-word');
const wordInput = document.querySelector('#input');
const guessBtn = document.getElementById('btn');
const message = document.querySelector('.message');


updateDisplayWord();


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = wordInput.value.trim().toLowerCase();

    if (!input.match(/^[a-zA-Z]+$/) || (input.length > 3)) {
        alert('Please enter 2 or 3 valid letters (a-z)');
        wordInput.value = '';
        return;
    }




    let remainig = chosenWord.substring(0, 3);

    if (input == remainig) {

        showMessage(`Congratulations! You guessed the word is "${chosenWord}"!`, 'success');
        guessBtn.value = 'Play Again';
        wordInput.disabled = true


    } else {
        chances--;
        if (chances > 0){
        showMessage(`Incorrect guess. ${chances} chances left.`, 'error');
        wordInput.value = '';
        guessBtn.value = 'Try again';
        }
        else{
            showMessage(`Your chances are ended and the word was "${chosenWord}".`);
            guessBtn.value = 'Play Again';
            wordInput.disabled = true;
            return;
        }
    }


    guessBtn.addEventListener('click', () => {
    if (guessBtn.value == 'Play Again') {
        location.reload()

    }
})
    
});



function showMessage(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`;
}


function updateDisplayWord() {
    let displayWord = "";
    for (let i = 0; i < chosenWord.length; i++) {
        if (i < 3) {
            displayWord += "_";
        } else {
            displayWord += chosenWord[i];
        }
    }
    guessedWordDisplay.textContent = displayWord;
}