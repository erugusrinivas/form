let key = "4b566653c56018c8cf1d63241c14865b";
let kel_default = 273.15;
const getData = async () => {
    let city = document.getElementById('val1').value;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const response = await fetch(url1);
    let json_res = await response.json();
    console.log(json_res);
    document.getElementById('city_name').innerHTML = json_res.name;
    var temp_k = Math.round(json_res.main.temp - kel_default);
    let temp1 = `<p>${temp_k}&degC</p>`
    document.getElementById('w_info').innerHTML = temp1;

    var temp_min = Math.round(json_res.main.temp_min- kel_default);
    let min= `<p>${temp_min}&degC</p>`
    document.getElementById('low').innerHTML=min;

    var temp_max = Math.round(json_res.main.temp_max - kel_default);
    let max= `<p>${temp_max}&degC</p>`
    document.getElementById('high').innerHTML=max;

    var sunrise=(json_res.sys.sunrise);
    let rise=`<p>sunrise${sunrise}</p>`
    document.getElementById('rise').innerHTML=rise;

    let timestamp = '1702688010';
    let date=new Date(timestamp * 1000);
    console.log(date);
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let time = `<p> ${hrs}:${mins}AM</p `;
    
    var sunrise=(`${time}`);
    
    document.getElementById('rise').innerHTML=sunrise;

    let times = '';
    let dt=new Date(times * 1000);
    console.log(dt);
    let hr = dt.getHours();
    let minu = dt.getMinutes();
    let timess = `<p>${hr}:${minu} PM</p `;
    var sunset=(`${timess}`);
    
    document.getElementById('set').innerHTML=sunset;



    
let visibiltyInms=''; 
var v = (json_res.visibility/1000);
let visible=`<p>${v} km</p>`
document.getElementById('visibility').innerHTML = visible;

    var hum=Math.round(json_res.main.humidity);
    let humidity=`<p>${hum} %</p>`
document.getElementById('humid').innerHTML=humidity;   


var windsd=Math.round(json_res.wind.speed);
    let speeds=`<p>${windsd} km/h</p>`
document.getElementById('windspeed').innerHTML=speeds;  
// var airqul=Math.round(json_res.main.aqi);
// let air=`<p>${ airqul} </p>`
// document.getElementById('airqaulity').innerHTML=air;  
var airQualityMeter = document.querySelector('.air-quality-meter');
var airQualityValue = document.querySelector('.air-quality-value');
var averageValue = document.querySelector('.average-value');

var airQuality = Math.round(Math.random() * 101);

airQualityValue.style.clip = 'rect(0px, ' + (airQuality * 2) + 'px, 200px, 100px)';

var total = 0;
var count = 0;

function calculateAverage() {
 total += airQuality;
 count++;

 var average = total / count;
 averageValue.textContent = average.toFixed(2);
}

setInterval(calculateAverage, 5000);


var uv=(json_res.weather.length);
let uvind=`<p>${uv} </p>`
document.getElementById('UVIndex').innerHTML=uvind; 


var dt_txt = [];
var xmlhttp = new XMLHttpRequest();
  var url = "nt.json";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);


      dt_txt = data.list.map(function (elem) {
        let dt = new Date(elem.dt_txt);
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let am_pm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let time = hours + ':' + minutes + '0' + ' ' + am_pm;
        return time;
      });


      temp = data.list.map(function (elem) {
        return elem.main.temp - 273.15;
      })
      console.log(temp);
      const ctx = document.getElementById('canvas').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dt_txt,
          datasets: [{
            label: 'temperature',
            data: temp,
            backgroundColor: "white",
            borderWidth: 1,
            color: '#495057'
          }]
        },
        options: {
            
          scales: {
            y: {

              beginAtZero: true,
              stepSize: 20,
              min: 0,
              max: 30
            }
          },
          
        }
     })
}
}
date=document.getElementById('date-time');
  function getDateTime(){
    let now=new Date(),
    hour=now.getHours(),
    minute=now.getMinutes();

    let days=[
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
];
hour = hour%12;
  if(hour < 10){
      hour = "0" + hour;
  }
  if(minute < 10){
    minute = "0" + minute;
}
let dataString=days[now.getDay()];
return `${dataString}:  ${hour}:${minute}`;

  }
  date.innerText=getDateTime();
  //update time everysecond
  setInterval(()=>{
    date.innerText=getDateTime();
  },1000);
function getData(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}",{
        method:"GET",
  }).then((response)=>response.json())
  .then((data)=>{
    console.log(data);
    currentCity=data.currentCity;
  });
}getData();

};
var key1="4b566653c56018c8cf1d63241c14865b"
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key1}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: "cors" });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
        <div class="more-info">
        <p>Humidity : <span>${humidity}%</span></p>
        <p>Wind speed : <span>${+Math.trunc(windSpeed * 3.16)}km/h</span></p>
        </div>
    `;

  // cleanup
  main.innerHTML = "";

  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});
// var airQualityMeter = document.querySelector('.air-quality-meter');
// var airQualityValue = document.querySelector('.air-quality-value');
// var averageValue = document.querySelector('.average-value');

// var airQuality = Math.floor(Math.random() * 101);

// airQualityValue.style.clip = 'rect(0px, ' + (airQuality * 2) + 'px, 200px, 100px)';

// var total = 0;
// var count = 0;

// function calculateAverage() {
//  total += airQuality;
//  count++;

//  var average = total / count;
//  averageValue.textContent = average.toFixed(2);
// }

// setInterval(calculateAverage, 5000);
var speed=0;
var prevSpeed=0;
var currentScale=1;
function increaseSpeed(){
    if(speed<180){
        speed=speed + 10;
        addclass()
        currentScale = currentScale + 1;
        changeActive();
        changeText();
    }
}
function decreaseSpeed(){
    if(speed>0){
        speed=speed-10;
        addclass();
        changeActive();
        currentScale = currentScale + 1;
        changeText();
       
    }
}
function addclass(){  
let newclass="speed-"+speed;
let prevClass="speed-"+prevSpeed;
let el=document.getElementsByClassName("arrow-wrapper")[0];
if(el.classList.contains(prevClass)){
    el.classList.remove(prevClass);
    el.classList.add(newclass);
}
prevSpeed=speed
}
function changeActive(){
    let tempClass="speedometer-scale-" + currentScale;
    let el=document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active")
}
function changeText(){
    let el=document.getElementsByClassName("Km")[0];
    el.innerText=speed;
}









// uvIndex=document.querySelector(".uv-index"),
// uvText=document.getElementById("uv-oted"),
// windSpeed=document.querySelector("uv-")

//  function getData(uvIndex){
//   if(uvIndex <= 2){ 
//     uvText.innerText="low";

//   }else if(uvIndex <= 5){
//     uvText.innerText="moderate";
//   }else if(uvIndex <=7){
//     uvText.innerText="high";
//   }else if(uvIndex<=10){
//     uvText.innerText="very high";
//   }
  
//  }