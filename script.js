var apiKey ="78b8cd49761ceab314734264668b8b2d";

var searchCity = "";
 showResult();



function showResult(city)
 {
     if(city)
     {
         searchCity = city;
    }
    else
    {
        searchCity="calgary";
        
    }
    // console.log(searchCity);

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ searchCity+"&units=metric&appid="+apiKey;
    console.log(queryURL);

    $.ajax({
        URL: queryURL,
        method: "GET",
    }).then(function(response)
        {
        // console.log(queryURL)
        
        console.log(response);
    });
}

 

 

