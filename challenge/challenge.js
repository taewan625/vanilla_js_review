const fontColor = document.querySelector("h1");

function changeThreeColor() {
  if (window.innerWidth > 1000) {
    document.body.style.backgroundColor = "yellow";
  } else if (window.innerWidth < 1000 && window.innerWidth > 500) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "blue";
  }
  fontColor.style.color = "white";
}
window.addEventListener("resize", changeThreeColor);
