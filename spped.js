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





























