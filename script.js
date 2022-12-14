let digClock = document.querySelector(".digitalClock");
let dayInWeek = document.querySelector(".date");
let analogHour = document.querySelector(".hourLine");
let analogMinute = document.querySelector(".minutLine");
let analogSecund = document.querySelector(".secondLine");

let day = [
  "NEDELJA",
  "PONEDELJAK",
  "UTORAK",
  "SREDA",
  "CETVRTAK",
  "PETAK",
  "SUBOTA",
];

let months = [
  "JAN",
  "FEB",
  "MART",
  "APR",
  "MAJ",
  "JUN",
  "JUL",
  "AVG",
  "SEP",
  "OKT",
  "NOV",
  "DEC",
];

function setClock() {}

setInterval(() => {
  let date = new Date();

  let hour = date.getHours();
  let hourAn = date.getHours() % 12;
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  let viewSecond = second * 6;
  let viewMinutes = minutes * 6;
  let viewHour = date.getHours() * 15;
  console.log(viewHour);

  let nowManth = date.getMonth();
  let nowWeek = date.getDay();
  let nowDay = date.getDate();

  digClock.innerHTML = `${hour < 10 ? `0${hour}` : hour}: ${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  dayInWeek.innerHTML = `${day[nowWeek]}, ${months[nowManth]} <span>${nowDay}</span>`;

  analogSecund.style.transform = `rotate(${viewSecond}deg)`;
  analogMinute.style.transform = `rotate(${viewMinutes}deg)`;
  analogHour.style.transform = `rotate(${viewHour}deg)`;
}, 1000);
