// conditional 조건문

const age = parseInt(prompt("how old are you?")); // JS는 안에서 부터 바깥으로 결과를 도출한다 // ParserInt로 type을 나타낸다

console.log(age); // typeof age를 사용할 때 asdfasd라고 넣으면 number라고 나오지만 그냥 console.log를 하면 NaN으로 잘 나옴
console.log(isNaN(age)); // one argument를 주었을 때 boolean을 보여준다 function 이름 처럼 숫자가 아닐 때 true 값을 나타낸다

// ### if문을 return으로 받는 방법 ###
const condition = isNaN(age);

function ifReturn(condition) {
  if (condition) {
    // if문의 ()안의 condition은 type 이 boolean 이여야 한다
    return "it isn't number";
  } else {
    return "it is number";
  }
}
const returnResult = ifReturn(condition);

// if (condition) {
//   console.log("it isn't number");
// } else {
//   console.log("it is number");
// }
