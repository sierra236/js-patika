function getName(){
var name = prompt("Pls enter your name.", "");
document.getElementById("myName").innerHTML = name;
}


function showTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let dayNumber = date.getDay();

    let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = dayArray[dayNumber];


let time = h + ":" + m + ":" + s + " " + day;
document.getElementById("myClock").innerHTML = time;

setTimeout(showTime,1000);
}

getName();
showTime();