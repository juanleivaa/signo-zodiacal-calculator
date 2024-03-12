console.log('Hola desde dom.js');

let browserImgRef = document.getElementById('browserImg');
let browserNameRef = document.getElementById('browserName');

function browserDetect () {
    let browser;
    let imgSrc;
    let browserVer;
    let appVersion = window.navigator.appVersion;

    if(appVersion.indexOf('Chrome') > -1) {
        browserVer= appVersion.slice(appVersion.indexOf('Chrome') + 7);
        browser = 'Chrome';
        imgSrc = '/css/assets/chrome.png';

    } else if(appVersion.indexOf('Firefox') > -1) {
        browserVer= appVersion.slice(appVersion.indexOf('Firefox') + 8);
        browser = 'Firefox';
        imgSrc = '/css/assets/firefox.png';

    } else if(appVersion.indexOf('Safari') > -1) {
        browserVer= appVersion.slice(appVersion.indexOf('Safari') + 7);
        browser = 'Safari';
        imgSrc = '/css/assets/safari.png';

    } else {
        browserVer= appVersion.slice(appVersion.indexOf('MSIE') + 5);
        browser = 'No se pudo detectar el navegador';


    }


    browserNameRef.innerHTML = `<h1 class="display-4" style="color: black; padding: 10px;">${browser}</h1>`;
    browserNameRef.innerHTML += `<span class="display-8" style="padding: 10px;">Versión: ${browserVer}</span>`;
    browserImgRef.innerHTML = `<img src="${imgSrc}" alt="${browser}" width="150" height="150" style="padding: 10px;"> `;

}




function showClock() {
    setInterval(function() {

        let clock = new Date();
        let hour = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();

    
        if (hour < 10) {
            hour = `0${hour}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }


    
        let clockRef = document.getElementById('clock');
        clockRef.innerHTML = `<h1 class="display-4" style="color: black; padding: 10px;">${hour}:${minutes}:${seconds}</h1>`;  

    }, 1000)
   
}


