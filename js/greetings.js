// login form div ckwdma
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // browser의 새로고침을 막아주는 역할
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); // input에 넣을때 그 순간에 보여주기 위함
}

// loginForm.addEventListener("submit", onLoginSubmit);
// 초기값처럼 여기 있어도 되고

function paintGreetings(anythingCan) {
  greeting.innerText = `Hello, ${anythingCan}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const getitemUsername = localStorage.getItem(USERNAME_KEY);

if (getitemUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // 여기로 넣어도 상관 없음
} else {
  paintGreetings(getitemUsername); // 새로고침을 하고 나서도 보여주기 위함
}
