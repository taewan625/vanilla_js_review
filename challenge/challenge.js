const clockTitle = document.querySelector(".js-clock");

function getDday() {
  const today = new Date();
  const nowYear = today.getFullYear();

  const anniver = new Date(nowYear, 11, 31);
  const difference = anniver.getTime() - today.getTime();

  const Dday = String(difference / (1000 * 60 * 60 * 24));
  const DdaySplit = Dday.split("."); // Dd/ay에서 소수점 앞자리만 가지고 올 것
  const DdaySplitZero = DdaySplit[0].padStart(2, "0");

  const Dhours = String(parseFloat(`0.${DdaySplit[1]}`) * 24); // Dhours에서 소수점 뒷자리만 가지고 와서 곱하기 24 후 다시 string
  // const Dhours = parseInt(DhoursString); 이거 쓰면 소수점 밑에 다 쳐내버림 ㄷㄷ
  const DhoursSplit = Dhours.split(".");
  const DhourSplitZero = DhoursSplit[0].padStart(2, "0");

  const Dminutes = String(parseFloat(`0.${DhoursSplit[1]}`) * 60);
  const DminutesSplit = Dminutes.split(".");
  const DminutesSplitZero = DminutesSplit[0].padStart(2, "0");

  const Dseconds = String(parseFloat(`0.${DminutesSplit[1]}`) * 60);
  const DsecondsSplit = Dseconds.split(".");
  const DsecondsSplitZero = DsecondsSplit[0].padStart(2, "0");

  clockTitle.innerText = `${DdaySplitZero}d ${DhourSplitZero}h ${DminutesSplitZero}m ${DsecondsSplitZero}s`;
}
getDday();
setInterval(getDday, 1000);

// parserFloat 대신 Number 사용해도 무방 둘다 string -> num 으로 바꿔주는 역할
// 가끔 엿같게 오류 먹힘 왠지 모르겠음, 같은 방식으로 console.log에 직접 곱하기 해봤는데 오류 걸림
// 원래 그런가봄

ab = "0.0001";
ac = ab.split(".");
ad = parseFloat(`0.${ac[1]}`) * 60;
console.log(ad);

b = "0.0001";
c = b.split(".");
d = Number(`0.${c[1]}`) * 60;
console.log(d);

console.log(0.0001 * 600); // 원래 그런가봄...
