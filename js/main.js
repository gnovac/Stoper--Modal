const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.archive');
const time = document.querySelector('.time');
const stoperwatch = document.querySelector('.stoperwatch');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorsBox = document.querySelector('.colors');
const firstColor = document.querySelector('.first');
const secondColor = document.querySelector('.second');
const thirdColor = document.querySelector('.third');
const fourthColor = document.querySelector('.fourth');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {
        if (seconds < 9) {
            stoperwatch.textContent = `${minutes}:0${seconds++}`;
        } else if (seconds >= 9 && seconds < 59) {
            stoperwatch.textContent = `${minutes}:${seconds++}`;
        } else {
            seconds = 0;
            stoperwatch.textContent = `${minutes++}:00`;
        }
    }, 1000);
}

const handlePause = () => {
    clearInterval(countTime);
}

const clearValues = () => {
    clearInterval(countTime);
    seconds = 0;
    minutes = 0;
    stoperwatch.textContent = `0:00`;
    timeList.textContent = '';
}

const handleStop = () => {
    time.innerHTML = `Ostatni czas: ${stoperwatch.textContent}`;

    if (stoperwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stoperwatch.textContent);
    }

    clearValues();
}


const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearValues();
}

const showArchive = () => {
    let numberTimes = 1;
    timeList.textContent = '';

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${numberTimes++}:<span>${time}</span>`;
        timeList.appendChild(newTime);
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }

    modalShadow.classList.toggle('modal-animation');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);

infoBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);

colorBtn.addEventListener('click', () => {
    colorsBox.classList.toggle('show-colors');
});

firstColor.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(240, 12, 0)');
    root.style.setProperty('--hover-color', 'rgb(228, 12, 1)');
})
secondColor.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(40, 240, 0)');
    root.style.setProperty('--hover-color', 'rgb(37, 214, 2)');
})
thirdColor.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 112, 240)');
    root.style.setProperty('--hover-color', 'rgb(2, 88, 187)');
})
fourthColor.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(224, 240, 0)');
    root.style.setProperty('--hover-color', 'rgb(214, 230, 2)');
})