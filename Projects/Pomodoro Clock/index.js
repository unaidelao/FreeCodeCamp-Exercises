$(document).ready(function(){
  // Declaración de variables.
  var audio = $("audio")[0];
  var sessionTime = 25;
  var breakTime = 5;
  var minutes = 25;
  var seconds = 0;
  var timeCounter;

  // Le pone secundero al reloj.
  $("#clockTimer").html(minutes + ":00");
  
  // Función de cuenta atrás para el break.
  function countdownBreak() {
    
    $("#status").html("Break Time!!!");
    
    // Cambia valores del temporizador.
    if (minutes === 0 && seconds === 0) {
      $("#clockTimer").html(minutes + ":0" + seconds);
      clearInterval(timeCounter);
    }
    else {
      if (seconds === 0) {
        seconds = 60;
        minutes--;
      }
      seconds--;
      if (seconds < 10) {
        $("#clockTimer").html(minutes + ":0" + seconds);
      }
      else {
        $("#clockTimer").html(minutes + ":" + seconds);
      }
    }
  }
  // Función de cuenta atrás para la sesión.
  function countdownSession() {
    
    // Activar el sonido de alerta / aviso.
    if (minutes === 0 && seconds === 1) {
      audio.play();
    }
    
    // Cambia valores del temporizador.
    if (minutes === 0 && seconds === 0) {
      $("#clockTimer").html(minutes + ":0" + seconds);
      clearInterval(timeCounter);
      minutes = breakTime;
      seconds = 0;
      timeCounter = setInterval(countdownBreak, 1000);
    }
    else {
      if (seconds === 0) {
        seconds = 60;
        minutes--;
      }
      seconds--;
      if (seconds < 10) {
        $("#clockTimer").html(minutes + ":0" + seconds);
      }
      else {
        $("#clockTimer").html(minutes + ":" + seconds);
      }
    }
  }
  
  // Funcionalidad de los botones de tiempo.
  $("#breakMinusBtn").click(function() {
    if (breakTime > 1) {
      $("#breakTime").html(breakTime -= 1);
    }
  });
  
  $("#breakPlusBtn").click(function() {
      $("#breakTime").html(breakTime += 1);
  });
  
  $("#sessionMinusBtn").click(function() {
    if (sessionTime > 1) {
      $("#sessionTime").html(sessionTime -= 1);
      $("#clockTimer").html(sessionTime + ":00");
      seconds = 0;
      minutes = sessionTime;
    }
  });
  
  $("#sessionPlusBtn").click(function() {
      $("#sessionTime").html(sessionTime += 1);
      $("#clockTimer").html(sessionTime + ":00");
      seconds = 0;
      minutes = sessionTime;
  });
  
  // Funcionalidad del reloj.
  $("#startBtn").click(function() {
    $("#status").html("Session Running");
    timeCounter = setInterval(countdownSession, 1000);
  });
  
  $("#pauseBtn").click(function() {
    $("#status").html("Session Paused");
    clearInterval(timeCounter);
  });
  
  $("#resetBtn").click(function() {
    $("#status").html("Session Reset");
    $("#clockTimer").html(sessionTime + ":00");
  });
  
});
