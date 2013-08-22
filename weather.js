$(document).ready(function() {

   // Get the current conditions
   $.ajax({
      url: 'http://api.aerisapi.com/observations/' + zip + '   ?client_id=LI7gJnbLEdzpjWXZzBaMP&client_secret=4wgCjhk2sd0AC0YPbzsnp94X1HaY0EdSocIfwSEw',
      dataType: "jsonp",
      success: function(json) {
            
         if (json.success) {
               
            // Save the weather objec in variable "currentWeather"
            var currentWeather = json.response.ob;

            // Save the weather description in a variable
            var conditions = currentWeather.weather.toLowerCase();

            // Save the weather code in a variable
            var wpc = currentWeather.weatherPrimaryCoded;
            
            // Use a switch to set the background based on weather codes
            switch (wpc) {
               // Clear
               case "CL":
                  $('.main').addClass('sunny');
               break;

               // Fair + partly cloudy
               case "FW":
                  $('.main').addClass('partly-cloudy');
               break;
               case "SC":
                  $('.main').addClass('partly-cloudy');
               break;
               
               // Mostly cloudy + cloudy
               case "BK":
                  $('.main').addClass('partly-cloudy');
               break;
               case "OV":
                  $('.main').addClass('partly-cloudy');
               break;

               /*
               // Fog
               BR Mist
               H  Haze
               F  Fog
               IF Ice fog
               ZF Freezing fog

               // Rain
               L  Drizzle 
               ZL Freezing drizzle
               RW Rain showers
               R  Rain
               ZR Freezing rain
               RS Rain/snow mix

               // Hail
               A  Hail
               IP Ice pellets / sleet

               // Snow
               SI Snow/sleet mix
               WM Wintry mix  
               S  Snow
               SW Snow showers
               ZY Freezing spray

               // Dust/Sand
               BD Blowing dust   
               BN Blowing sand

               // Snow
               BS Blowing snow

               // Frost
               FR Frost   
               IC Ice crystals      

               // Smoke
               K  Smoke
   
               // Thunderstorm
               T  Thunderstorms    

               // Volcanic Ash
               VA Volcanic ash
               
               // Water spouts
               WP Water spouts   
 
               // Unkown
               UP Unknown Precipitation   
               */
               }
            

            // Display current temp and conditions   
            $('#temp').html(currentWeather.tempF + '\u00B0');               
            $('#conditions').html(conditions);
               
            } else {
                  
               alert('Unable to load current conditions: ' + json.error.description);
               
            }
         }
      });
});
