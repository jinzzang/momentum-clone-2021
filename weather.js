const COORDS_LS = "coords";
const API_KEY = "19c8b41c033e894da56e7885eafd3563";
const weather = document.querySelector('.js-weather');


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));

}

function weatherApi(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(
        function (response) {
            console.log(response);
            return response.json();
        }).then(function (res) {
            const city = res.name;
            const temp = res.main.temp;
            weather.innerText = `${temp} @ ${city}`;
        })
        ;

}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    weatherApi(latitude, longitude);
}

function handleGeoError(error) {
    console.log('cant access coords');

}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords == null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        weatherApi(parseCoords.latitude, parseCoords.longitude);
    }
}



function init() {
    loadCoords();
}


init();