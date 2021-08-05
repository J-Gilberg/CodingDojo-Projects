var data
document.getElementById("measurement").addEventListener('change', metricCalc);

async function fetchWeather(location){
    var response1 = await fetch("https://www.metaweather.com/api/location/search/?query="+location);
    var woeidData = await response1.json();
    console.log(woeidData[0].woeid);

    var woeid = woeidData[0].woeid;
    var response2 = await fetch("https://www.metaweather.com/api/location/"+ woeid);
    data = await response2.json();
    console.log(data.consolidated_weather);
    

    for(var i = 0; i < 4; ++i){
        var abbr = data.consolidated_weather[i].weather_state_abbr;
        console.log(abbr);
        // var response3 = await fetch("https://www.metaweather.com/static/img/weather/"+ abbr +".svg");
        var pic = "https://www.metaweather.com/static/img/weather/"+ abbr +".svg";
        document.getElementById("day"+(i+1)+"img").src = pic;

        document.getElementById("day"+(i+1)+"desc").innerText = data.consolidated_weather[i].weather_state_name;
    }

    metricCalc()

}

function hide(){
    document.getElementById("cookieBox").remove();
}

function metricCalc(){

    var convert = 0;

    if(document.getElementById("measurement").value == "F"){
        convert = 1;
    }
    for(var i = 0; i < 4; ++i){
        
        if(convert === 0){
            document.getElementById("day"+(i+1)+"high").innerText = Math.round(data.consolidated_weather[i].max_temp)+"°";
            document.getElementById("day"+(i+1)+"low").innerText = Math.round(data.consolidated_weather[i].min_temp)+"°";
        }else{
            document.getElementById("day"+(i+1)+"high").innerText = Math.round((data.consolidated_weather[i].max_temp * (9/5) + 32))+"°";
            document.getElementById("day"+(i+1)+"low").innerText = Math.round((data.consolidated_weather[i].min_temp * (9/5) + 32))+"°";
        }
    }
}