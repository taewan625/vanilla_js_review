// login form div ckwdma
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `hello, ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);
// 초기값처럼 여기 있어도 되고

function paintGreetings(anythingCan) {
  greeting.innerText = `hello, ${anythingCan}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const getitemUsername = localStorage.getItem(USERNAME_KEY);

if (getitemUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // 여기로 넣어도 상관 없음
} else {
  // greeting.innerText = `hello, ${getitemUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(getitemUsername);
}
