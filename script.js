const firstTimer = document.getElementById('firstTimer');
const secondTimer = document.getElementById('secondTimer');
const thirdTimer = document.getElementById('thirdTimer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const displayTime = document.getElementById('displayTime');

const totalTimeInSeconds = 5 * 60;
let reamaingSecond = totalTimeInSeconds ;
let timerInterval = null;


startBtn.addEventListener('click', function () {
    function updateContdown() {
        reamaingSecond--;
        if (reamaingSecond < 0 ) {
            clearInterval(timerInterval);
            timerInterval = null;
            displayTime.textContent = "00:00";
            console.log('time is up !');
            return;
        }
        const minutes = Math.floor(reamaingSecond / 60);
        const seconds = reamaingSecond % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        displayTime.textContent = `${formattedMinutes} : ${formattedSeconds}`;
    }
    if (timerInterval === null) {
        reamaingSecond = totalTimeInSeconds;
        updateContdown();
        displayTime.textContent = "05:00";
        timerInterval = setInterval(updateContdown, 1000);
        console.log("timer start");
    } else {
        console.log('timer is already runinng !');
    }
});
``