const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId;
let bodyStyle = document.body.style;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    timerId = setInterval(() => {
        bodyStyle.background = getRandomHexColor();
        console.log('Button disabled', startButton.disabled);
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    startButton.disabled = false;
    console.log('Button disabled', startButton.disabled);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
