$(document).ready(function(){
  // Declaración de variables.
  var audio = $("audio")[0];
  var pause = false;
  var sessionTime = 25;
  var breakTime = 5;
  var minutes = 25;
  var seconds = 0;
  var timeCounter;

  // Le pone secundero al reloj.
  $(".clockTimer").html(minutes + ":00");
});
