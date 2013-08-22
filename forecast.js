$(document).ready(function() {

	   // Get the 7 day forecast   
      $.ajax({
         url: 'http://api.aerisapi.com/forecasts/' + zip + ' ?client_id=LI7gJnbLEdzpjWXZzBaMP&client_secret=4wgCjhk2sd0AC0YPbzsnp94X1HaY0EdSocIfwSEw',
         dataType: "jsonp",
         success: function(json) {
            
            if (json.success) {
               
               // Save the forecast as an array called fc
               var fc = json.response;

               // Show avgTemp for tomorrow
               $('#tomorrow').html(fc[0].periods[0].avgTempF + '\u00B0');
               // $('#tomorrow').append('<span class=tomorrow>' + 'tomorrow' + '</span>');
               
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
