import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInp = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');

const timeData = {
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
};

let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose() {
        if (this.selectedDates[0] <= this.config.defaultDate) {
            btn.disabled = true;
            return;
        }
        btn.disabled = false;
        btn.addEventListener('click', () => {
            timerId = setInterval(() => {
                let delta = this.selectedDates[0] - new Date();
                if (delta > 0) {
                    const { days, hours, minutes, seconds } = convertMs(delta);
                    timeData.days.textContent = addLeadingZero(days);
                    timeData.hours.textContent = addLeadingZero(hours);
                    timeData.minutes.textContent = addLeadingZero(minutes);
                    timeData.seconds.textContent = addLeadingZero(seconds);
                } else {
                    clearInterval(timerId);
                }
            }, 1000);
        });
    },
};

flatpickr(dateInp, options);

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
