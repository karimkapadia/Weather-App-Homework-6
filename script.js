var apiKey ="78b8cd49761ceab314734264668b8b2d";
var resp= ""
var searchCity = "";
var citySaved = [];

 showResult();

//  $("#title").html("Hello")

 async function showResult(city)
 {
     if(city)
     {
         searchCity = city;
    }
    else
    {
        searchCity="calgary";
        
    }
    console.log(searchCity);
    var currqueryURL ="https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=metric&appid="+apiKey;
    await fetch(currqueryURL)
    .then(response1 => response1.text())
    .then(str => resp1=(JSON.parse(str)))
    console.log(resp1);

     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ searchCity+"&units=metric&appid="+apiKey;
    console.log(queryURL);


 await fetch(queryURL)
  .then(response => response.text())
  .then(str => resp2=(JSON.parse(str)))
   console.log(resp2);


 var date = moment.unix(resp1.dt);
//   currDate=parseInt(resp.list[0].dt_txt.split(" ")[0].split("-")[2]-1);
  var y= date._d.constructor().split(" ");
  console.log(y[3],y[2],y[1]);

document.querySelector("#mainTitle").innerHTML  = searchCity +" : "+y[3]+"/"+y[2]+"/"+y[1];
document.querySelector("#mainTemp").innerHTML = "Tempreture :"+ resp1.main.temp;
document.querySelector("#mainHumidity").innerHTML = "Humidity :" +resp1.main.humidity;
document.querySelector("#mainWind").innerHTML = "Wind : "+ resp1.wind.speed;

document.querySelector("#day1Date").innerHTML =  resp2.list[0].dt_txt.split(" ")[0];
document.querySelector("#day1Temp").innerHTML = "Tempreture :" + Math.round(resp2.list[0].main.temp);
document.querySelector("#day1Humidity").innerHTML = "Wind : "+ resp2.list[0].main.humidity;

document.querySelector("#day2Date").innerHTML =  resp2.list[8].dt_txt.split(" ")[0];
document.querySelector("#day2Temp").innerHTML = "Tempreture :" + Math.round(resp2.list[8].main.temp);
document.querySelector("#day2Humidity").innerHTML = "Wind : "+ resp2.list[8].main.humidity;

document.querySelector("#day3Date").innerHTML =  resp2.list[16].dt_txt.split(" ")[0];
document.querySelector("#day3Temp").innerHTML = "Tempreture :" + Math.round(resp2.list[16].main.temp);
document.querySelector("#day3Humidity").innerHTML = "Wind : "+ resp2.list[16].main.humidity;

document.querySelector("#day4Date").innerHTML =  resp2.list[24].dt_txt.split(" ")[0];
document.querySelector("#day4Temp").innerHTML = "Tempreture :" + Math.round(resp2.list[24].main.temp);
document.querySelector("#day4Humidity").innerHTML = "Wind : "+ resp2.list[24].main.humidity;

document.querySelector("#day5Date").innerHTML =  resp2.list[32].dt_txt.split(" ")[0];
document.querySelector("#day5Temp").innerHTML = "Tempreture :" + Math.round(resp2.list[32].main.temp);
document.querySelector("#day5Humidity").innerHTML = "Humidity : "+ resp2.list[32].main.humidity;
    
   
    
}

function showSearch(event)
{
    event.preventDefault()

    // console.log(document.querySelector("#serachText").value);
    searchCity= document.querySelector("#serachText").value;
    showResult(searchCity);
    var id = "_"+Date.now;
    // var listDiv = document.createElement("div")
    var button =document.createElement("button");

    const buttonHTML = `<button onClick="showResult('${searchCity}')">${searchCity}</button>`

    document.querySelector("#cityList").innerHTML+= buttonHTML;
    citySaved.push(searchCity);
    localStorage.setItem("cityList",citySaved );


    // listitem.innerHTML =searchCity;
    // document.querySelector("#cityList").appendChild(listitem);


}
