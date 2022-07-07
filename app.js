// conditional 조건문

const age = parseInt(prompt("how old are you?")); // JS는 안에서 부터 바깥으로 결과를 도출한다 // ParserInt로 type을 나타낸다

const condition = isNaN(age);

function ifReturn(condition) {
  if (condition || age < 0) {
    return "Please write an age";
  } else if (age < 18) {
    return "minor can't drink";
  } else if (age >= 18 && age <= 80) {
    return "Welcome to bar";
  } else if (age > 90) {
    return "Think about your health";
  }
  // else는 옵션이여서 굳이 안써도 된다
}
const returnResult = ifReturn(condition);
