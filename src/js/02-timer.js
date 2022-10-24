import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const getEl = selector => document.querySelector(selector);
// const timerFields = document.querySelectorAll('.timer .value');

const startBtn = getEl('[data-start]');
startBtn.setAttribute('disabled', 'disabled');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startBtn.setAttribute('disabled', 'disabled');
            document.querySelectorAll('.timer .value').forEach(timerItemValue => timerItemValue.textContent = '00');
        } else {
            startBtn.removeAttribute('disabled');
            const timerValue = selectedDates[0].getTime() - Date.now();
            fillTimer(timerValue);
        };
    },
};
const fp = flatpickr(getEl('#datetime-picker'), options);

function fillTimer(data) {
    const { days, hours, minutes, seconds } = convertMs(data);
    getEl('[data-days]').textContent = addLeadingZero(days);
    getEl('[data-hours]').textContent = addLeadingZero(hours);
    getEl('[data-minutes]').textContent = addLeadingZero(minutes);
    getEl('[data-seconds]').textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    const timeId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = fp.selectedDates[0].getTime() - currentTime;
        if (deltaTime <= 0) { clearInterval(timeId) } else {
            fillTimer(deltaTime)
        };
    }, 1000);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
