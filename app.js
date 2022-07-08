// Uncaught TypeError: Cannot read properties of null (reading 'innerText') at app.js:3:19
// 이 오류는 title이 존재하지 않으니 내부의 innerText를 호출하지 마시오 랑 같은 의미

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = " green";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  // h1.style.color = "blue";
}

h1.addEventListener("click", handleTitleClick);

/*
h1.style.color = newColor ; The first one changes the color of h1
newColor = h1.style.color ; The second one saves the color of the h1 in a variable.

처음에 newColor라는 빈 let변수를 선언했고 if, else를 거치면서 초기화 값을 할당받게 됩니다. 즉, newColor = "tomato"; 이런식으로 되죠.
그리고 그 값을 h1에 넣어주는 것이기 때문에 h1.style.color = newColor;가 되는겁니다!

초반에 currentColor에 현재 색상 값을 저장하고 이후 newColor 변수를 선언해서 if 문에 따라 어떤 색상을 지정할지 값을 할당했습니다.
그리고 마지막에 당연히 그 어떤 값을 넣을지 세팅한 newColor를 h1.style.color에 저장하면 이제 그 색상이 바뀌게 되는데,
newColor에 다시 h1.style.color를 할당하면 이제까지 if문에서 한 것은 의미가 없고 색상이 바뀌지도 않습니다.

#### 중요!! ####
변수 2가지에 대해 헷갈려하시는 것에 대한 제 의견을 말씀드려보도록 하겠습니다.
1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

이를 토대로 코드를 순차적으로 이해하면,

1) click event 발생 및 함수 실행
2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3) newColor 변수 선언
4) currentColor 현재 값 확인
5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6) 마지막으로 h1.style.color에 newColor값 대입 (setter)

왜 currentColor 를 let 이 아닌 const 로 만들고 굳이 newColor 를 새로 만드시나 했는데,,설명을 읽고 나니 이해가 가네요.
getter와 setter, 의미에 따라 변수를 분리한 것이었네요. 감사합니다.
*/
