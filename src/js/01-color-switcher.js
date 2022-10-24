const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

if (timerId === 0) {
  stopBtn.setAttribute('disabled', 'disabled');
}

startBtn.addEventListener('click', onStartBtn)
stopBtn.addEventListener('click', onStopBtn)

function onStartBtn() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000);
  toggleStateEl(startBtn, stopBtn, 'disabled');
}

function onStopBtn() {
  clearInterval(timerId);
  toggleStateEl(startBtn, stopBtn, 'disabled');
}

function toggleStateEl(el1, el2, atribute) {
  if (!el1.hasAttribute(atribute)) {
    el1.setAttribute(atribute, atribute);
    el2.removeAttribute(atribute);
  } else {
    el1.removeAttribute(atribute);
    el2.setAttribute(atribute, atribute);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}