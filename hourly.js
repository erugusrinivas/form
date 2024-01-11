// var xmlhttp=new XMLHttpRequest();

// var url="http://localhost/bar-chart/jsonData.json";
// xmlhttp.open("GET",url,true);
// xmlhttp.send();
// xmlhttp.onreadystatechange=function(){
//     if(this.readyState==4 && this.status==200){

//         var data=JSON.parse(this.responseText);
//         // console.log(data);

//         date=data.date_population.map(function(elem){
//             return elem.date;
//         })
//         population=data.date_population.map(function(elem){
//             return elem.population;
//     })
//     console.log(population);
//     const ctx = document.getElementById('canvas').getContext('2d');
//     const myChart= new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels:date,
//       datasets: [{
//         label: 'population',
//         data:population,
//         backgroundColor:"orangered",
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//     }
// }
//     });


// }
// }
var dt_txt = [];
var population = [];
var temp = `${temp}`;
// let timestamp='';
// let data=new Date(timestamp*1000);
// console.log(data);
// let hrs = date.getHours();
//     let mins = date.getMinutes();
//     let time = `<p>${hrs}:${mins}AM</p `;

//     var t=(`${time}`);

//     document.getElementById('TIMING').innerHTML=t;
var xmlhttp = new XMLHttpRequest();
var url = "nt.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        // dt_txt = data.list.map(function (elem) {
        //     return elem.dt_txt;

        // dt_txt = data.list.map(function (elem) {
        //     let dt = new Date(elem.dt_txt);
        //     let hours = dt.getHours();
        //     let minutes = dt.getMinutes();
        //     let time = hours + ':' + minutes ;
        //     return time;
        //    })

        dt_txt = data.list.map(function (elem) {
 let dt = new Date(elem.dt_txt);
 let hours = dt.getHours();
 let minutes = dt.getMinutes();
 let am_pm = hours >= 12 ? 'PM' : 'AM';
 hours = hours % 12;
 hours = hours ? hours : 12; // the hour '0' should be '12'
 let time = hours + ':' + minutes+ '0'+' ' + am_pm;
 return time;
});
        // temp = data.list.map(function (elem) {
        //     return elem.temp;
        temp = data.list.map(function (elem) { 
            return elem.main.temp; })
        
        console.log(temp);
        const ctx = document.getElementById('canvas');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dt_txt,
                datasets: [{
                    label: 'weather',
                    data: temp,
                    backgroundColor: "orangered",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        
                        beginAtZero: true,
                        min: 200,
                        stepSize: 500,
                        max:290
                    }
                    // y: {
                    //     beginAtZero: true,
                    //     min: 200,
                    //     max: 300,
                    //     ticks: {
                    //       stepSize: 50,
                    //       callback: function (value, index, values) {
                    //         return index === 0 || index === values.length - 1 ? value : null;
                    //       }
                    //     }
                    // }
                }
            }
        })
    }
};