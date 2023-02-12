const temperature = document.querySelector(".temperature").textContent;
const windSpeed = document.querySelector(".windSpeed").textContent;
const windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = 35.74 + (0.6125 * temperature) - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16);
    windChill = windChill.toFixed(1) + "\u00B0F";
}

const windChillSpan = document.querySelector(".windChill");
windChillSpan.textContent = windChill;