const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // date에 관한 모든 정보 함유
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 정한 시간만다 function을 실행

// "string".padStart(2,"0") ;  "string"이 2자리가 아닐시 앞에 "0"이란 string을 넣으세요
// padEnd도 존재
// String(number) => string으로 변환
