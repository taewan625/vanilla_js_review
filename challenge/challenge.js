const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");
const body = document.querySelector("body");
// body도 querySelector로 끄집어 내야 함 하지만 style.backgorundImage까지 만든 variable은 작동 X / 따로따로가 속편함

function gradationColor() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(to right, ${firstColor},${secondColor})`;
  // body.style.backgorundImage까지 만든 "variable"은 작동 X / 따로따로가 속편함
  // linear-gradient는 backgroundcolor가 아니라 backgorundImage를 이용 -> 벡틱 사용해서 설정
}

button.addEventListener("click", gradationColor);
