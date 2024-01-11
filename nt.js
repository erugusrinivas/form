let key= "4b566653c56018c8cf1d63241c14865b";
const getData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${key}`;
    const response = await fetch(url);
    let json_res = await response.json();
    console.log(json_res);
var temp_min =(json_res.dt);
let min= `<p>${temp_min}&degC</p>`
document.getElementById('minute').innerHTML=min;
}
 getData()