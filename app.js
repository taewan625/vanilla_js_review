// html 기본 설정된 class 유지하는 방법 classList

const h1 = document.querySelector(".hello h1");
console.dir(h1);
/* 콘솔창에서 보았을 때 h1에서 사용할 수 있는 object들이 나열되어있고 object 중에서도 안에 object가 있어서 h1.object.object = ""
하거나 object 안에 prototype이 있어서 h1.object.prototype("##"); 이렇게 기능을 사용할 수 있는 것들이 존재한다
1) 기본 tag 2) body 3) window */

function handleTitleClick() {
  // h1.classList.toggle("active");
  // 밑에 function이랑 같은 기능을 하는 code : toggle

  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
window.addEventListener("click", handleTitleClick);
document.body.addEventListener("click", handleTitleClick);
