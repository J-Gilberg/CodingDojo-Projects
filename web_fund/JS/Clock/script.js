function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
var secDeg = 0;
var minDeg = 0;
var hourDeg = 0;

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    secDeg = (time%60)*6;
    console.log(secDeg)
    document.getElementById("seconds").style.transform = "rotate("+secDeg +"deg)";
    minDeg = Math.round((time%3600)/60)*6;
    console.log(minDeg);
    document.getElementById("minutes").style.transform = "rotate("+ minDeg +"deg)";
    hourDeg = Math.round((time%43200)/3600)*30;
    console.log(hourDeg);
    document.getElementById("hour").style.transform = "rotate("+hourDeg +"deg)";
    console.log(time);
      
}, 1000);
  

console.log(new Date().getHours());
console.log(new Date().getMinutes());