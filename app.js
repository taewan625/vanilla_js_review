const objectReturn = {
  functionNameObjectReturn: function (
    variableNameOneReturn,
    variableNameTwoRetrun
  ) {
    return `${variableNameOneReturn} ${variableNameTwoRetrun}`;
    console.log(
      "return값이 나오고 나면 function은 작동을 멈춰서 이 console.log 값은 나오지 않는다."
    );
  },
};
const needThisVariableForGetFunctionResult =
  objectReturn.functionNameObjectReturn("argument3", "argument4");

// 복습
// return을 하면 function은 작동을 멈추고 결과 값을 return하고 끝내버린다
// const needThisVariableForGetFunctionResult 값을 이용해서 HTML 밖으로 결과를 내는 과정 중 준비단계라고 생각하면 된다
