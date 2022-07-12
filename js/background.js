const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const jsToHTMLImages = document.createElement("img");
jsToHTMLImages.src = `img/${randomImage}`;
// console.log(jsToHTMLImages);

// 여기까지가 js에서 img tag를 만드는 것이고 이제 HTML에 넣을 것이다

document.body.appendChild(jsToHTMLImages);
// jsToHTMLImages.src = `img/${randomImage}`; 이게 존재하지 않으면 html에 그냥 <img> tag만 존재

// JS -> HTML로 tag 넣는 법
// 1) const variable = document.createElement("tagName")
// 2) variable.argument = `text or ${}`
// 3) document.body.appendChild(variable)
