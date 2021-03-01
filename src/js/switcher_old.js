import colors from './data/colors.js';
const body = document.querySelector('body');

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;

// При клике на Старт, запустим интервал,
// будем каждую секунду выводить в консоль строку,
// используем Date.now для уникального числа,
// чтобы строки в консоли были разные
// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     //
//     colors.forEach((num, idx) => {
//       body.style.backgroundColor = num;
//       console.log(idx);
//     });
//     //
//   }, 1000);
// });

startBtn.addEventListener('click', () => {
  colors.forEach((num, idx) => {
    //
    timerId = setInterval(() => {
      // console.log(idx);
    }, 1000);
    //
    // body.style.backgroundColor = num;
    // console.log(idx);
    //
  });
});

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('setInterval stopped!');
});

// Для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let index = 0;
const primtMe = (value, i) => {
  if (i < colors.length) {
    setTimeout(() => {
      console.log(i + ' value = ' + value);
      body.style.backgroundColor = colors[i];
      primtMe(colors[i + 1], i + 1);
    }, 3000);
  }
};

primtMe(colors[index], index);

// function displayTime() {
//   let date = new Date();
//   let time = date.toLocaleTimeString();
//   document.querySelector('.time').textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);
