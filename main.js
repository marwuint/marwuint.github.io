const timeDisplay = document.getElementById("cdown");
const event = new Date(2020, 10, 11, 0, 0, 0);

const t_sec = 1000;
const t_min = 60 * t_sec;
const t_hour = 60 * t_min;
const t_day = 24 * t_hour;


function toCountdown(ms) {

    let days = Math.floor(ms/t_day);
    ms -= days * t_day;
    let hours = Math.floor(ms / t_hour);
    ms -= hours * t_hour;
    let minutes = Math.floor(ms /t_min);
    ms -= minutes * t_min;
    let seconds = Math.floor(ms / t_sec);
    return `${days}:${p(hours)}:${p(minutes)}:${p(seconds)}`
}

function p(a) {
    return a.toString().padStart(2,'0');
}

setInterval(() => {
    timeDisplay.innerHTML = toCountdown(event - Date.now());
}, 1000);

timeDisplay.innerHTML = toCountdown(event - Date.now());
