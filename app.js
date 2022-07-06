// 이제 JS 값을 browser 상에 나타내기 = code에서 결과를 얻어내기

// 현재까지 사용한 function 들은 console.log를 통해서 function을 통해 만들어진 값이 console 창으로 바로 나오는 것 -> function은 일하고 나서 비워진 상태
// 하지만 retrun을 사용하면 값 자체가 function 안에 저장이 됨

// console.log
const objectConsoleLog = {
  functionNameObject: function (variableNameOne, variableNameTwo) {
    console.log(variableNameOne, variableNameTwo);
  },
};
objectConsoleLog.functionNameObject("argument1", "argument2");

// #####너무 중요한 개념 ##### return
const objectReturn = {
  functionNameObjectReturn: function (
    variableNameOneReturn,
    variableNameTwoRetrun
  ) {
    // `${variableNameOneReturn} ${variableNameTwoRetrun}`;
    // // return 값이 없으면 정보를 받아서 keep 해둘 수가 없음

    // return variableNameOneReturn + variableNameTwoRetrun;
    // // 일반적인 return 사용방법

    return `${variableNameOneReturn} ${variableNameTwoRetrun}`;
    // 수식 부호(+,-,/^^) 빼고 쓰려면 벡틱을 이용해서 쓰기
  },
};
const needThisVariableForGetFunctionResult =
  objectReturn.functionNameObjectReturn("argument3", "argument4"); // variable이 존재해야지 return으로 받는 값을 필요할때마다 추출 가능

console.log(needThisVariableForGetFunctionResult); // console창에서 그냥 확인한 것

// 정리
// needThisVariableForGetFunctionResult(=ntvfgfr)에서 값을 넣으면 function이 순차적으로 작동을 하고 계산이 다끝나면 return이란 code 덕분에
// return이란 말그대로 ntvfgfr에게 function으로 계산 했던 값을 돌려준다. 그래서 console.log했을 때 값이 나오는 이유도 return 덕분인 것이다.

//practice
const carculator = {
  plus: function (a, b) {
    return a + b;
  },
  delete: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },

  times: function (a, b) {
    return a * b;
  },
};
const Num1 = 10;
const Num2 = 20;
// const Num1 Num2는 cons hereplus 보다 위에만 있으면 상관 없음

const hereplus = carculator.plus(Num1, Num2);
const heredelete = carculator.delete(hereplus, 6);
const heredivdie = carculator.divide(hereplus, heredelete);
const heretimes = carculator.times(heredivdie, 10);
