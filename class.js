//  var mydata=document.getElementById("demo").innerHTML;
// console.log(mydata);
//  var btn=document.getElementById("mybtn");
// btn.addEventListener('mouseenter',function(){
//     myfun();
// });
   

// function myfun(){
//     document.getElementById("demo").innerHTML="my text"
// }
// var btn=document.getElementById("mybtn");
// console.log(btn);
// var btn=document.getElementById("mybtn").innertext;
// console.log(btn1);
// var btn=document.getElementById("mybtn").innertext;
// console.log(btn);
// document.getElementById("uname").value;
// document.getElementById('upass').value;
let uname_status=false;
let upass_status=false;
let uname=document.getElementById('uname');
let upass=document.getElementById('upass');
let submit_btn=document.getElementsByClassName('mybtn')[0];
uname.addEventListener('input',function(){
    if(uname.value.length>=3){
        uname_status=true;
    // document.getElementById('uname_val').classList.add('hide');
    // uname.classList.add('red');
    uname.classList.remove('red');
    }
    else{
        uname_status=false;
        // document.getElementById('uname_val').classList.remove('hide');
        // uname.classList.remove('red');
        uname.classList.add('red');
    }
    validate()
})
upass.addEventListener('input',function(){
    if(upass.value.length>=6){
        upass_status=true;
        // document.getElementById('upass_val').classList.add('hide');
        // upass.classList.add('red');
        upass.classList.remove('red');
    }
    else{
        upass_status=false;
        // document.getElementById('upass_val').classList.remove('hide');
        // upass.classList.remove('red');
        upass.classList.add('red');
    }
    validate()
})
function validate(){
    if(uname_status && upass_status){
        submit_btn.classList.remove('disabled');
    }
    else{
        submit_btn.classList.add('disabled');
    }
}