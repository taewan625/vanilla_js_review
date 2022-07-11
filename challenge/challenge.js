const playForm = document.querySelector("form");
const maxNumber = playForm.querySelector("#max");
const playerNum = playForm.querySelector("#playerNum");

const detail = document.querySelector(".detail");
const result = document.getElementById("innerHTML");
function Playbutton(pause) {
  pause.preventDefault(); // 일시정지

  const changeToInt = parseInt(maxNumber.value);
  // input 값을 value를 이용해 가저옴 -> string이기 때문에 int로 변경

  const multiNum = changeToInt + 1;
  const randomNum = Math.floor(Math.random() * multiNum);
  localStorage.setItem("random", randomNum);

  playerNum.setAttribute("max", changeToInt);
  // attribute 추가 max값 이내로 제한

  const changeToIntTwo = parseInt(playerNum.value);
  localStorage.setItem("betNum", changeToIntTwo);

  const me = localStorage.getItem("betNum");
  const machine = localStorage.getItem("random");
  detail.innerText = `You chose: ${me}, the machine chose: ${machine}.`;

  if (me === machine) {
    result.innerHTML = "You Won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

playForm.addEventListener("submit", Playbutton);
