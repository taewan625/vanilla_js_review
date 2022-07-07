// ##### 자주 사용! #####
const title = document.getElementById("title");
console.dir(title.innerText);
title.innerText = "Change!!";

console.log(title.id);
console.log(title.class); // getElemenById로 id를 이용해서 연결한 것이라서 class를 찾을 수 없음
console.log(title.className); // 하지만 id가 title인 tag에서 classNAme의 정보는 가지고 올 수 있다
