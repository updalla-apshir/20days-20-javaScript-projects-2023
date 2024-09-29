// UI elements
const quetoDiv = document.querySelector('.queto'),
      generateBtn = document.querySelector('.btn'),
      favoriteBtn = document.querySelector('.favorite-btn'),
      favoriteDisplayBtn = document.querySelector('.favorite-displayBtn');

// Array of quetos
const quetos = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Whoever is happy will make others happy too. - Anne Frank",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

let favoriteQuetos = JSON.parse(localStorage.getItem('favoriteQuetos')) || [];

generateBtn.addEventListener('click', generateQueto);

function generateQueto() {
    generateBtn.innerHTML = 'Next';
    const randomIndex = Math.floor(Math.random() * quetos.length);
    const randomQueto = quetos[randomIndex];
    quetoDiv.innerHTML = randomQueto;
    quetoDiv.className = 'block';
    const currentQueto = quetoDiv.innerHTML.trim();
    if (favoriteQuetos.includes(currentQueto)) {
        favoriteBtn.innerHTML = 'Unlove';
    } else {
        favoriteBtn.innerHTML = 'Love';
    }
}

favoriteBtn.addEventListener('click', toggleFavorite);

function toggleFavorite() {
    const currentQueto = quetoDiv.innerHTML.trim();
    const quetoIndex = favoriteQuetos.indexOf(currentQueto);
    if (quetoIndex === -1) {
        favoriteQuetos.push(currentQueto);
        localStorage.setItem('favoriteQuetos', JSON.stringify(favoriteQuetos));
        alert('Queto added to favorites!');
        favoriteBtn.innerHTML = 'Unlove';
    } else {
        favoriteQuetos.splice(quetoIndex, 1);
        localStorage.setItem('favoriteQuetos', JSON.stringify(favoriteQuetos));
        alert('Queto removed from favorites!');
        favoriteBtn.innerHTML = 'Love';
    }
}

favoriteDisplayBtn.addEventListener('click', displayFavoriteQuetosInDiv);

function displayFavoriteQuetosInDiv() {
  let output = '';
  if (favoriteQuetos.length > 0) {
      const randomIndex = Math.floor(Math.random() * favoriteQuetos.length);
      output = favoriteQuetos[randomIndex];
      favoriteBtn.innerHTML = "Unlove";
  } else {
      output = '<p>No favorite quotes yet.</p>';
  }
  quetoDiv.innerHTML = output;
}



