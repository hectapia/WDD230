// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = '1239f81b2a6cc0c2674caa34d85f1c99';
const q = 'Fairbanks';
const units = 'imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${apiKey}`;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const descAsArray = desc.split(' ')
  
    for (var i=0; i < descAsArray.length; i++) {
        descAsArray[i] = descAsArray[i].charAt(0).toUpperCase() + descAsArray[i].slice(1);
    };

    const descUpperCase = descAsArray.join(' ');

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descUpperCase);
    captionDesc.textContent = descUpperCase;
  }
