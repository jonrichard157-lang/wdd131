// Get current year and last modified date for footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values (Metric: °C and km/h)
const temperature = 10;
const windSpeed = 10;

// One-line function to calculate metric wind chill factor
const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Viability check for metric wind chill: temp <= 10 °C and wind > 4.8 km/h
const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    const chillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chillValue} °C`;
} else {
    windChillElement.textContent = "N/A";
}

