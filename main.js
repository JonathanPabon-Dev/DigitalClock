let weekDay = document.querySelector(".week-day");
let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = document.querySelector(".date");
const weekDayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let main = setInterval(() => {
    let fullDate = new Date();
    let wd = fullDate.getDay();
    let hh = fullDate.getHours();
    let mm = fullDate.getMinutes();
    let ss = fullDate.getSeconds();
    let fd =
        monthsList[fullDate.getMonth()] +
        " " +
        fullDate.getDate() +
        ", " +
        fullDate.getFullYear();

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    weekDay.textContent = weekDayList[wd];
    hour.textContent = hh;
    minutes.textContent = mm;
    seconds.textContent = ss;
    date.textContent = fd;
});
