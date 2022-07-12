const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // date에 관한 모든 정보 함유
  clock.innerText = `${date.getDay()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
