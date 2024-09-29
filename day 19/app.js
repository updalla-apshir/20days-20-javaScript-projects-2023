const button=document.querySelector('#darkMode');
const musicContainer = document.querySelector('.music-player');
const day=document.querySelector('button .fa-sun');
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const sun=document.querySelector('.fa-sun');
const prevButton = document.getElementById('prev');
const currentProgress = document.getElementById('current-progress');
const currentTimeContainer = document.getElementById('current-time');
const maxDurationContainer = document.getElementById('max-duration');

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
nextButton.addEventListener('click', forward);
prevButton.addEventListener('click', backward);
audio.addEventListener('timeupdate', updateProgress);

day.addEventListener('click',()=>{
    if(musicContainer.style.background=='black'){
        musicContainer.style.background='white';
        button.style.background='black';
        sun.className='fa-solid fa-sun';
        sun.style.color='white';
        sun.style.marginLeft="0px";






    }
    else{
        musicContainer.style.background='black';
        button.style.background='white';
        sun.className='fa-solid fa-moon';
        sun.style.color='black'
        sun.style.marginLeft="45px";

    }

})

function playAudio() {
    audio.play();
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
}

function pauseAudio() {
    audio.pause();
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
}

function forward() {
    audio.currentTime += 10; // Forward 10 seconds
}

function backward() {
    audio.currentTime -= 10; // Backward 10 seconds
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    currentProgress.style.width = `${progress}%`;
    
    const currentTime = formatTime(audio.currentTime);
    const maxDuration = formatTime(audio.duration);
    currentTimeContainer.textContent = currentTime;
    maxDurationContainer.textContent = maxDuration;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return` ${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}