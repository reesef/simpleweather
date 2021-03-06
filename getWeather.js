$(document).ready(function() {

   // Set the default zip to SF
   var defaultZip = 94110;
   
   // Set the zip to default
   var zip = defaultZip;

   var currentWeather;
   var conditions;
   var wpc;

   // Get the current conditions
   $.ajax({
      url: 'http://api.aerisapi.com/observations/' + zip + '   ?client_id=LI7gJnbLEdzpjWXZzBaMP&client_secret=4wgCjhk2sd0AC0YPbzsnp94X1HaY0EdSocIfwSEw',
      dataType: "jsonp",
      success: function(json) {
            
         if (json.success) {
               
            // Save the weather objec in variable "currentWeather"
            currentWeather = json.response.ob;

            // Save the weather description in a variable
            conditions = currentWeather.weather.toLowerCase();

            // Save the weather code in a variable
            wpc = currentWeather.weatherPrimaryCoded.split(':');

            // Use a switch to set the background based on weather codes
            switch (wpc) {
               // Clear
               case "CL":
                  $('#main').addClass('sunny');
               break;

               // Fair + partly cloudy
               case "FW":
                  $('#main').addClass('partly-cloudy');
               break;
               case "SC":
                  $('#main').addClass('partly-cloudy');
               break;
               
               // Mostly cloudy + cloudy
               case "BK":
                  $('#main').addClass('partly-cloudy');
               break;
               case "OV":
                  $('#main').addClass('partly-cloudy');
               break;

               // Default
               default:
                  $('#main').addClass('default');

               }

            // Display current temp and ob   
            $('#temp').html(currentWeather.tempF + '\u00B0');               
            $('#conditions').html(conditions);
               
            } else {
                  
               alert('Unable to load current conditions: ' + json.error.description);
               
            }
         }
      });


});
