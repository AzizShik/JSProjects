const dataElement = document.querySelectorAll('.header__countdown-item h4');



function getTime() {
  const deadline = new Date('August 30, 2021 00:00:00').getTime();
  const now = new Date().getTime();

  const distance = deadline - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor((distance / oneDay));
  const hours = Math.floor((distance % oneDay) / oneHour);
  const minutes = Math.floor((distance % oneHour) / oneMinute);
  const seconds = Math.floor((distance % oneMinute) / 1000);

  const daysElement = document.querySelector('.days h4');
  const hoursElement = document.querySelector('.hours h4');
  const minutesElement = document.querySelector('.minutes h4');
  const secondsElement = document.querySelector('.seconds h4');

  daysElement.innerText = `${days < 10 ? `0${days}` : `${days}`}`;
  hoursElement.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}`;
  minutesElement.innerText = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  secondsElement.innerText = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

getTime();

const interval = setInterval(getTime, 1000);