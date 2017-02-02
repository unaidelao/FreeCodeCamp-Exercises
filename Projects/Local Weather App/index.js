$(document).ready(function(){

var latitudeVar;
var longitudeVar;

  // Taking location + API setup
  $.getJSON("http://ip-api.com/json",function(dataGeo){
    latitudeVar = dataGeo.lat;
    longitudeVar = dataGeo.lon;
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitudeVar+'&lon='+longitudeVar+'&appid=b86d21440d8c9a110912a2eb0845abb4';

    // Taking data from Weather API and putting them into the .well
    $.getJSON(api, function(data){

      var kelvin = data.main.temp;
      var fahrenheit = (kelvin*(9/5)-459.67).toFixed(1);;
      var celsius = (kelvin-273).toFixed(1);

      var tempFlag=true;
      var weatherType= data.weather[0].description;
      var city = data.name;
      var country = data.sys.country;

      $("#city-country").html(city + "," + country);
      $("#weatherType").html(weatherType);
      $("#fahrenheit").html(fahrenheit + " \xB0 F");

      // Temperature swap function
      $("#fahrenheit").click(function(){
        if ($('#fahrenheit').is(":contains('\xB0 F')")) {
          $('#fahrenheit').html(celsius + '\xB0 C');
        }
        else {
          $('#fahrenheit').html(fahrenheit + '\xB0 F');
        }
      });

      // Background image rotation
      if(fahrenheit < 50){
        $('body').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/3/37/Morning_Freezing_Fog_in_Elko,_Nevada.JPG)');
      }
      else if(fahrenheit < 60){
        $('body').css('background-image','url(https://upload.wikimedia.org/wikipedia/en/5/54/Lenticular_Cloud_in_Wyoming_0034b.jpg)');
      }
      else if(fahrenheit < 70){
        $('body').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/e/ed/Flickr_-_ronsaunders47_-_Waiting_for_the_warm_weather.jpg)');
      }
      else if(fahrenheit < 80){
        $('body').css('background-image','url(http://www.beach-backgrounds.com/wallpapers/tropical-beach-wallpaper-1920x1200-144.jpg)');
      }
      else{
        $('body').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/3/34/Rub_al_Khali_002.JPG)');
      }
    });
  });
});
