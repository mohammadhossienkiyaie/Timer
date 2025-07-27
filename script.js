const firstTimer = document.getElementById('firstTimer');
const secondTimer = document.getElementById('secondTimer');
const thirdTimer = document.getElementById('thirdTimer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const displayTime = document.getElementById('displayTime');
const restBtn = document.getElementById("restBtn");
const timerProgress = document.querySelector(".timer-progress");

let timeLeft;
let countdownInterval = null;
let initialTimeForCurrentCountdown;
const pCircle = 282.74 ;
let initialTimeForCircleCountdown = null ;

const TIMER_DURATIONS = {
    first: 480,
    second: 600,
    third: 900,
};

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainigSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainigSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
if (firstTimer, secondTimer, thirdTimer, displayTime) {
    firstTimer.addEventListener('click', function () {
        displayTime.textContent = "08:00";
    })
    secondTimer.addEventListener('click', function () {
        displayTime.textContent = "10:00";
    })
    thirdTimer.addEventListener('click', function () {
        displayTime.textContent = "15:00";
    })
    restBtn.addEventListener('click', function () {
        displayTime.textContent = "00:00";
    })
}

function timeToString(timeString) {
    const parts = timeString.split(':');
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return minutes * 60 + seconds;
}

function countDown() {
    timeLeft--;
    const percentage = timeLeft / initialTimeForCircleCountdown ;
    const dashoffset = pCircle * (1 - percentage);
    timerProgress.style.strokeDashoffset = dashoffset ;
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        displayTime.textContent = "00:00";
        timerProgress.style.strokeDashoffset = pCircle;
        return;
    } else {
        displayTime.textContent = formatTime(timeLeft);
    }
}
if (startBtn && displayTime) {
    startBtn.addEventListener('click', function () {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        timeLeft = timeToString(displayTime.textContent);
        initialTimeForCircleCountdown = timeLeft ;
        countdownInterval = setInterval(countDown, 1000);
        countDown();
    });
}
if(stopBtn){
    stopBtn.addEventListener('click' , function(){
        clearInterval(countdownInterval);
        countdownInterval = null ;
    });
}