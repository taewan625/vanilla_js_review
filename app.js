// conditional 조건문

const age = parseInt(prompt("how old are you?"));

const condition = isNaN(age);

function ifReturn(condition) {
  if (condition || age < 0) {
    return "Please write an age";
  } else if (age < 18) {
    return "minor can't drink";
  } else if (age >= 18 && age <= 80) {
    return "Welcome to bar";
  } else if (age === 100) {
    // ===, !==
    console.log("wowee!!");
  } // JS는 위에서부터 아래로 실행되고 return값은 받고 나서부터 function이 멈춰서 작동을 안함
  // 그래서 100살 console.log 받으려면 age >100보다 위에 있으면 작동함
  else if (age > 90) {
    if (age < 100) {
      return "Think about your health";
    } else {
      return "holy shit";
    }
    // else if 안에도 if문을 넣을 수 있다
  }
}
const returnResult = ifReturn(condition);
