// function : 계속해서 반복해서 쓸수있는 코드 조각

// function 에서 ()는 function을 실행하는 부분
// {} 부분이 반복 실행 됨
function functionName(variableName, secondVariableName) {
  console.log("hello my name is ", variableName, secondVariableName);
}
// function 실행 ()가 존재하면 됨
functionName("firstArgument", "secondArgument");
functionName("b", 2);
functionName("c", 3);
functionName("d", 4);
// functionName("text",1); 값을 넣었을 때 function 에서 값을 나타내는 법 / variableName은 2개까지 넣을 수 있다

function counter(a, b) {
  console.log(a * b);
  console.log(a / b);
}
counter(1, 2);
counter(2, 2);
counter(4, 2);
counter(5, 2);

// ####아주 중요#### object 안에서 function 이용하는 방법
const object = {
  property1: "a",
  property2: "b",
  functionNameObject: function (variableName) {
    console.log("text", variableName);
  },
};
console.log(object.property1); // 따로 function으로 만들어지지 않은 object들은 console.log를 이용해서 가져오고
object.functionNameObject("argument"); // object 내에 만든 function으로 만들어진 property는 다이렉트로 object.functionNameObject(); 형식으로 진행 -> 콘솔창에도 잘 나옴

// ##중요## 추가하는 방법
object.propertyPlus = "c";
// property 추가
object.functionNAmeObjectPlus = function (variableName1) {
  console.log("text1", variableName1);
}; // function property 추가
console.log(object);

// 연습
const practiceOne = {
  fno: function (a, b) {
    console.log(a + b);
  },
};
practiceOne.fno(3431, 123);
