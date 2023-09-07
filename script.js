
function showTime(){
let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let hourHand = ((30*hour) + (min/2));
let minHand = (6 * min);
let secHand = (6 * sec);


document.getElementById("hour-hand").style.transform = `rotate(${hourHand}deg)`;
document.getElementById("min-hand").style.transform = `rotate(${minHand}deg)`;
document.getElementById("second-hand").style.transform = `rotate(${secHand}deg)`;
}

setInterval(showTime , 1000);