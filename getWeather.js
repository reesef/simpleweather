$(document).ready(function() {

   // Set the default zip to SF
   var defaultZip = 94110;
   
   // Set the zip to default
   var zip = defaultZip;

   // Get the current conditions
   $.ajax({
      url: 'http://api.aerisapi.com/observations/' + zip + '   ?client_id=LI7gJnbLEdzpjWXZzBaMP&client_secret=4wgCjhk2sd0AC0YPbzsnp94X1HaY0EdSocIfwSEw',
      dataType: "jsonp",
      success: function(json) {
            
         if (json.success) {
               
            var currentWeather = json.response.ob;
               
            $('#temp').html(currentWeather.tempF + '\u00B0');               
            $('#conditions').html(currentWeather.weather.toLowerCase());
               
            } else {
                  
               alert('Unable to load current conditions: ' + json.error.description);
               
            }
         }
      });

	   // Get the 7 day forecast   
      $.ajax({
         url: 'http://api.aerisapi.com/forecasts/' + zip + ' ?client_id=LI7gJnbLEdzpjWXZzBaMP&client_secret=4wgCjhk2sd0AC0YPbzsnp94X1HaY0EdSocIfwSEw',
         dataType: "jsonp",
         success: function(json) {
            
            if (json.success) {
               
               var fc = json.response;

               // Show avgTemp for tomorrow
               $('#tomorrow').html(fc[0].periods[0].avgTempF + '\u00B0');
               $('#tomorrow').append('<span class=tomorrow>' + 'tomorrow' + '</span>');
               
               // Iterate through avgTemp for rest of week
               for (i = 1; i < fc[0].periods.length; i++) {
                  
                  $('#forecast').append('<div class=day' + '>' + '<span>' + fc[0].periods[i].avgTempF + '\u00B0' + '</span>' + '</div>');
               
               }
            } else {
               alert('Unable to load forecast:' + json.error.description);
            }
         }
      });
});
