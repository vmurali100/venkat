function gotoRegister(){
    location.href="register.html"
}

function gotoLogin(){
    location.href="login.html"
}

function showTime(){ //function to display the current time
    var todaysTime = new Date()
    document.getElementById("date").innerHTML = todaysTime.toLocaleTimeString();
}
showTime();
setInterval(function (){
    showTime();
},1000)