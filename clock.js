function updateNeedle(temp) {
    let rotation = (temp - 20) * 6; // 6 is the degrees of rotation per degree celsius
    rotation = rotation < 0 ? 0 : rotation; // Limit the rotation to 0 degrees
    rotation = rotation > 300 ? 300 : rotation; // Limit the rotation to 300 degrees
    document.getElementById('needle').style.transform = rotate`(${rotation}deg)`;
   }
   updateNeedle(json_Resp.main.temp);
// Assuming data is the weather data object obtained from the API
document.querySelector('#g6 text').textContent = json_Resp.main.temp;