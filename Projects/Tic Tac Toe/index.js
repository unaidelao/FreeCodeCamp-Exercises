$(document).ready(function() {
  
  var game = {
    userToken: "",
    computerToken: "",
    currentPlayer: "", // user o computer
    moves: 0
  };
  
  var gameEnded = false;
  var winnerRow = false;
  
  $("#game").hide();
  $(".greetings").hide();
  
  
  setToken();
  
  play();
  
  
  // ========== Función para elegir el token: X ó O ==========
  function setToken() {
    $("#btnX").on("click", function() {
       game.userToken = "fa fa-times";
       game.computerToken = "fa fa-circle-o";
       $("#userChoice").hide();
       $(".footer").hide();
       $("#game").show();
     });
     
    $("#btnO").on("click", function() {
       game.userToken = "fa fa-circle-o";
       game.computerToken = "fa fa-times";
       $("#userChoice").hide();
       $(".footer").hide();
       $("#game").show();
     });
     
    setCurrentPlayer("user");
  }
  
  // ========== FUNCIÓN JUEGO ==========
  function play() {
    
    // Si turno del jugador.
    if (game.currentPlayer == "user") {
      
      $(".playBtn").on("click", function() {
        
        var x = $(this).attr("id");
        
        $("#" + x).attr("class", game.userToken);
        $("#" + x).attr("name", "full");
        $("#" + x).removeAttr("onClick");
        
        game.moves++;
        checkGameStatus();
        setCurrentPlayer("computer");
        play();
        
      });
    }
    // Si turno de la CPU.
    else if (game.currentPlayer == "computer"){
      
      // llamada a cpuMove().
      cpuMove(); 
    }
  }
  
   
  // ========== Establece el jugador del siguiente turno ==========
  function setCurrentPlayer (current) {
    game.currentPlayer = current;
  }
  
  // ========== Comprueba empate ==========
  function draw() {
    gameEnded = true;
    alert("Draw!!");
    restart();
  }
  
  // ========== Comprueba el estado del juego ==========
  function checkGameStatus() {
    checkWinnerLines();
    if (game.moves == 9 && winnerRow == false) {
      draw();
    }
  }
  
  // ========== Comprueba línea ganadora ==========
  function checkWinnerLines() {
    if ($("#first").attr("class") == game.userToken && $("#second").attr("class") == game.userToken && $("#third").attr("class") == game.userToken ||
        $("#fourth").attr("class") == game.userToken && $("#fifth").attr("class") == game.userToken && $("#sixth").attr("class") == game.userToken ||
        $("#seventh").attr("class") == game.userToken && $("#eighth").attr("class") == game.userToken && $("#nineth").attr("class") == game.userToken ||
        $("#first").attr("class") == game.userToken && $("#fourth").attr("class") == game.userToken && $("#seventh").attr("class") == game.userToken ||
        $("#second").attr("class") == game.userToken && $("#fifth").attr("class") == game.userToken && $("#eighth").attr("class") == game.userToken ||
        $("#third").attr("class") == game.userToken && $("#sixth").attr("class") == game.userToken && $("#nineth").attr("class") == game.userToken ||
        $("#first").attr("class") == game.userToken && $("#fifth").attr("class") == game.userToken && $("#nineth").attr("class") == game.userToken ||
        $("#third").attr("class") == game.userToken && $("#fifth").attr("class") == game.userToken && $("#seventh").attr("class") == game.userToken) {
          winnerRow = true;
          gameEnded = true;
          alert("User wins!!");  
          restart();
    }
    else if ($("#first").attr("class") == game.computerToken && $("#second").attr("class") == game.computerToken && $("#third").attr("class") == game.computerToken ||
        $("#fourth").attr("class") == game.computerToken && $("#fifth").attr("class") == game.computerToken && $("#sixth").attr("class") == game.computerToken ||
        $("#seventh").attr("class") == game.computerToken && $("#eighth").attr("class") == game.computerToken && $("#nineth").attr("class") == game.computerToken ||
        $("#first").attr("class") == game.computerToken && $("#fourth").attr("class") == game.computerToken && $("#seventh").attr("class") == game.computerToken ||
        $("#second").attr("class") == game.computerToken && $("#fifth").attr("class") == game.computerToken && $("#eighth").attr("class") == game.computerToken ||
        $("#third").attr("class") == game.computerToken && $("#sixth").attr("class") == game.computerToken && $("#nineth").attr("class") == game.computerToken ||
        $("#first").attr("class") == game.computerToken && $("#fifth").attr("class") == game.computerToken && $("#nineth").attr("class") == game.computerToken ||
        $("#third").attr("class") == game.computerToken && $("#fifth").attr("class") == game.computerToken && $("#seventh").attr("class") == game.computerToken) {
          winnerRow = true;
          gameEnded = true;
          alert("CPU wins!!");
          restart();  
    } 
  }
  
  // ========== Resetea el juego ==========
  function restart() {
    var r = confirm("Restart game??");
      if (r == true) {
        location.reload();
      }
      else {
        $("#game").hide();
        // Si no empieza nueva partida, se muestra el agradecimiento.
        $(".greetings").show();
      }
  }
  
  // ========== AI de la CPU ==========
  function cpuMove() {
    // Número aleatorio entre 1 y 9.
    var r = Math.ceil(Math.random() * 9);
    
    // Se asigna a esta variable el nombre del id de un botón.
    var r_text = "";
    
    switch(r) {
      case 1:
        r_text = "first";
        break;
      case 2:
        r_text = "second";
        break;
      case 3:
        r_text = "third";
        break;
      case 4:
        r_text = "fourth";
        break;
      case 5:
        r_text = "fifth";
        break;
      case 6:
        r_text = "sixth";
        break;
      case 7:
        r_text = "seventh";
        break;
      case 8:
        r_text = "eighth";
        break;
      case 9:
        r_text = "nineth";
    }
 
    // Si encuentra un hueco, coloca casilla... así de simple.
    if ($("#" + r_text).attr("name") == "empty" && gameEnded == false) {
      $("#" + r_text).attr("class", game.computerToken);
      $("#" + r_text).attr("name", "full");
      $("#" + r_text).removeAttr("onClick");
      
      game.moves++;
      checkGameStatus();
      setCurrentPlayer("user");
    }
    // Si no encuentra hueco en esa casilla, vuelve a intentarlo con otra.
    else {
      if (gameEnded == false && winnerRow == false) {
        cpuMove();
      }
    }
  }
  
});
