// Uncaught TypeError: Cannot read properties of null (reading 'innerText') at app.js:3:19
// 이 오류는 title이 존재하지 않으니 내부의 innerText를 호출하지 마시오 랑 같은 의미

const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
