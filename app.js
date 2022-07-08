// Uncaught TypeError: Cannot read properties of null (reading 'innerText') at app.js:3:19
// 이 오류는 title이 존재하지 않으니 내부의 innerText를 호출하지 마시오 랑 같은 의미

const h1 = document.querySelector(".hello h1");

console.dir(h1); // 여기서 on이 붙은 것이 eventlistener이다

function handleTitleClick() {
  h1.style.color = "blue";
  h1.innerText = "The mouse is here!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "green";
}
h1.addEventListener("mouseenter", handleTitleClick);
window.addEventListener("resize", handleWindowResize);
// = h1.onmouseenter = handleTitleClick;
// HTMLHeadingElement-web APIs ; JS 요소들
