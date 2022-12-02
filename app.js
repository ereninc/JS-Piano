"use strict";

const pianoKeys = document.querySelectorAll(".key");
const reMap = [
  "02",
  "04",
  "07",
  "09",
  "11",
  "14",
  "16",
  "18",
  "21",
  "23",
  "01", //this is white
  "03",
  "05",
  "06",
  "08",
  "10",
  "12",
  "13",
  "15",
  "17",
  "19",
  "20",
  "22",
  "24",
];
function playSound(newUrl) {
  // console.log(newUrl);
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const newUrl = "24-piano-keys/key" + reMap[i] + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
