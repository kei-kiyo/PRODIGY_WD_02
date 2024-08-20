let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.getElementById('display');
let lapsContainer = document.getElementById('laps');
let int = null;

document.getElementById('startStop').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
        int = null;
        document.getElementById('startStop').innerHTML = 'Start';
    } else {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStop').innerHTML = 'Stop';
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
    document.getElementById('startStop').innerHTML = 'Start';
});

document.getElementById('lap').addEventListener('click', () => {
    if (int !== null || timerRef.innerHTML !== '00:00:00') {
        let lapTime = document.createElement('div');
        lapTime.className = 'lap-time';
        lapTime.innerHTML = `Lap ${lapsContainer.children.length + 1}: ${timerRef.innerHTML}`;
        lapsContainer.appendChild(lapTime);
    }
});

document.getElementById('clear').addEventListener('click', () => {
    lapsContainer.innerHTML = '';
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timerRef.innerHTML = `${m}:${s}:${ms}`;
}
