const apiKey = 'd9b2c10f5cead8d4e210dd0d6a6554e7'; 
const searchInput = document.querySelector('input[name="search"]');
let url;
let wLoading = document.querySelector('.weather-loading');
let wLoadingImg = document.querySelector('.weather-loading img');

//para trabajar con el await
async function getGeoLoc() {
    let navigatorLocation = await new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(geoloc => {
            resolve({
                lat: geoloc.coords.latitude,
                lon: geoloc.coords.longitude
            });
        });
    });
    console.log(navigatorLocation);
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${navigatorLocation.lat}&lon=${navigatorLocation.lon}&appid=${apiKey}&units=metric`;
    search(url);
}

getGeoLoc();

function search(url) {
    wLoadingImg.src = '/css/assets/loading.svg';
    wLoading.style.visibility = 'visible';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {
            wLoadingImg.src = '/css/assets/loading.svg';
            wLoading.style.visibility = 'hidden';
            let wTemp = document.querySelector('.weather-temp');
            wTemp.innerHTML = Math.round(data.main.temp) + `°C`;
            wImg = document.getElementById('weatherImg');
            wIcon = data.weather[0].icon;
            wImgUrl = `http://openweathermap.org/img/w/${wIcon}.png`;
            wImg.setAttribute('src', wImgUrl);
            let wCity = document.querySelector('.weather-city');
            wCity.textContent = data.name; // Actualiza el contenido con el nombre del lugar
            console.log(data)
        })
}




searchInput.addEventListener('keyup', (ev) => {
    let location = ev.target.value;
    if (location.length > 3 && ev.keyCode == 13) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        search(url);
    }
});
