// webtube 강의 추천

const API_KEY ="";


// fetch에 대해서 알아보기 


function onGeoOK(position){
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("날씨를 불러올수가 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

