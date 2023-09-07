setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  //I take the ratio of the immediate secounds to the total secounds
  const secondsRatio = currentDate.getSeconds() / 60;
  //I take the ratio of the immediate minutes to the total minutes
  const minutesRatio = currentDate.getMinutes() / 60;
  //I take the ratio of the immediate hours to the total hours
  const hoursRatio = currentDate.getHours() / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  //Do the multiplication between the ratio of time and the total angle of the circle
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
