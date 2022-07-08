// Uncaught TypeError: Cannot read properties of null (reading 'innerText') at app.js:3:19
// 이 오류는 title이 존재하지 않으니 내부의 innerText를 호출하지 마시오 랑 같은 의미

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "active sexy-font";
  // h1.className = "active";
  if (h1.className === clickedClass) {
    h1.className = "sexy-font";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
