var airQualityMeter = document.querySelector('.air-quality-meter');
var airQualityValue = document.querySelector('.air-quality-value');
var averageValue = document.querySelector('.average-value');

var airQuality = Math.floor(Math.random() * 101);

airQualityValue.style.clip = 'rect(0px, ' + (airQuality * 2) + 'px, 200px, 100px)';

var total = 0;
var count = 0;

function calculateAverage() {
 total += airQuality;
 count++;

 var average = total / count;
 averageValue.textContent = average.toFixed(2);
}

setInterval(calculateAverage, 5000); // Calculate average every 5 seconds