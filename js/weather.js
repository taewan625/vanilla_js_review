const API_KEY = "6ffa3e9c805736a3da29f72a03dd5e17";
function onGoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const location = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ºC`;
      location.innerText = data.name;
    }); //fetch를 이용해서 network 창에서 url에 관한 정보를 얻을 수 있다
}
function onGoError() {
  alert("can't find your location");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoError);
