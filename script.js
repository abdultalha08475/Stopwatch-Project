
let hours = 0;
let  minutes = 0;
let seconds = 0;
let timerInterval = null;


let displayHours = document.getElementById('hours');
let displayMinutes = document.getElementById('minutes');
let displaySeconds = document.getElementById('seconds');


let firstTextBlock = document.getElementById('text');
let secondTextBlock = document.getElementById('textbox');


function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  displayHours.textContent = (hours < 10 ? '0' : '') + hours;
  displayMinutes.textContent = (minutes < 10 ? '0' : '') + minutes;
  displaySeconds.textContent = (seconds < 10 ? '0' : '') + seconds;
}


document.getElementById('start').addEventListener('click', () => {
  if (!timerInterval) {
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }
});


document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
});


document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  hours = minutes = seconds = 0;
  displayHours.textContent = '00';
  displayMinutes.textContent = '00';
  displaySeconds.textContent = '00';
});


document.getElementById('side-btn-1').addEventListener('click', (e) => {
  e.preventDefault();
  firstTextBlock.value = 'This is the option 1 button';
});

document.getElementById('side-btn-2').addEventListener('click', (e) => {
  e.preventDefault();
  firstTextBlock.value = 'This is the option 2 button';
});

document.getElementById('side-btn-3').addEventListener('click', (e) => {
  e.preventDefault();
  firstTextBlock.value = 'This is the option 3 button';
});


document.getElementById('side-btn-4').addEventListener('click', (e) => {
  e.preventDefault();
  firstTextBlock.value = '';
  secondTextBlock.value = '';
});
