//API-KEY 는 전역변수를 사용하여 gitignore 시킴. 연동을 위해서 key가 있는 js file을 html에 script로 연동만 하면 됨
function onGoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const degree = document.querySelector("#weather span:nth-child(2)");
      const location = document.querySelector("#weather span:last-child");
      location.innerText = data.name;
      weather.innerText = data.weather[0].main;
      degree.innerText = `/ ${data.main.temp}℃`;
    }); //fetch를 이용해서 network 창에서 url에 관한 정보를 얻을 수 있다
}
function onGoError() {
  alert("can't find your location");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoError);
