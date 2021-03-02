import colors from './data/colors';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
// Для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;

function handlerStartBtn() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.startBtn.disabled = true;
  console.log('setInterval started!-!-!-!');
}

function handlerStopBtn() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  console.log('setInterval stopped!');
}

refs.startBtn.addEventListener('click', handlerStartBtn);

refs.stopBtn.addEventListener('click', handlerStopBtn);
