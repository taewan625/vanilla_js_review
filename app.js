// data type : inst "text"

console.log(); // console 창에 값이 나옴
const variable = "value"; // variable은 띄어쓰기 불가. value 값은 text일때 따옴표 사용, inst일때 그냥 쓰기

// let : const와 달리 variable을 여러번 사용 가능 하다
let canChange = "text";
canChange = "another text"; // update 시 let을 빼고 variable만 사용

//var : old version variable 그래서 const let을 사용하고 var은 쓰면 안됨 헷갈림

// data type : boolean ; true or false
const booleanVariable = true; // boolean이라서 ""필요없음

// data type : none exit, none define, nothing(null)
const nullVariable = null;
// null: variable 값을 아무것도 없는 값으로 채웠다고 생각
// null은 자연스럽게 나오는 것이 아님. JS에서 variable에 값이 안넣은것을 나타낼때 표시하는 역할 정도

let undefineVariable;
// variable에 아무 값을 주지않아서 정의자체가 없는 것 //메모리는 있는데 값조차 주지않아서 나타나는 것

// data structure_array=list
const array = ["a", "b", "c", 1, 2, 3, false, true, null, undefined]; // this array has ten element
// array 숫자는 0부터 시작
console.log(array[0]); // a를 추출할 때
// data 구조 수정
array.push("add");

// data structure_object = nolist
// entity(개체)에 따른 여러 property(특성)가 존재할 때 entity.property -> player.name, player.points, player.handsome

const entity = {
  property1: "text1",
  property2: "text2",
  property3: 1,
  property4: 2,
};

// property 끄집어 내는 법
console.log(entity);
console.log(entity.property1); // = console.log(entity["property"]); array 형식의 대괄호 안에 숫자가 아니라 text 형식의 내용을 넣는 것이라 "" 필요

// update 방법
entity.property1 = "entity 전체를 바꾸는게 아니라서 가능"; // entity = ###  이건 불가능
entity.property3 = entity.property3 + 10000000;
console.log(entity);

// 추가하는 방법
entity.property5 = "addSomeText"; // 추가할 때는 : 가 아니라 = 을 이용하여서 value 추가
