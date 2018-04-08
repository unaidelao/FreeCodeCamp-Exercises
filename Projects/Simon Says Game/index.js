$(document).ready(function() {
  
  // Variables necesarias.
  var audioFiles = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  ];
  var isUserBlocked = true; // para impedir que el usuario pueda pulsar.
  var iCheck;  // contador para la función checkGameStatus().
  var randomNumbers = [];  // array con números aletorios.
  var buttonsClicked = []; // los botones que pulsa el usuario en su turno
  var cpuTurnToClick = []; // los botones que la cpu debe pulsar
  var gameTurn = 1;
  var cpuTurn;  // booleano para ir cambiando el turno de juego.
  var strict = false;
  
  
  // Inicia gráficamente el marcador.
  $('#displayLed').text('--');
  
  
  /* ==== MODO STRICT ==== */
  $("#strictBtn").on("click", function() {
    if (!strict) {
      strict = true;
    }
    else if (strict) {
      strict = false;
    }
    /*
    //DEBUG
    console.log("Strict variable Value: " + strict);
	*/
  });
  
  
  
  /* ==== COMENZANDO EL JUEGO... ==== */
  
  $('#startBtn').on('click', function() {
    
    start();
    
  });
  

  /* ==== FUNCIONES AUXILIARES DEL JUEGO ==== */
  
  /* Función para establecer los botones que debe pulsar la cpu en su turno */
  function setCpuTurnToClick() {
    for (var i = 0; i < gameTurn; i++) {
      cpuTurnToClick[i] = randomNumbers[i];
    }
  }
  
  /* Función para que la cpu juegue su turno */
  function cpuPlay() {
    // Se bloquea al usuario: no es su turno.
    isUserBlocked = true;
    // Define los números a pulsar por la cpu.
    setCpuTurnToClick();
    
    /*
    //DEBUG
    console.log('Cpu To Click: ' + cpuTurnToClick);
    console.log('cpuTurnToClick len: ' + cpuTurnToClick.length);
	*/
    
    var i = 0;
    var myInterval = setInterval(function () {
      var x = cpuTurnToClick[i];
      
      if (x == 1) {
        $("#a").css("background-color", "forestgreen");
        playAudio(0);
        
        setTimeout(function () {
          $("#a").css("background-color", "darkgreen");
        }, 800);
      }
      else if (x == 2) {
        $("#b").css("background-color", "indianred");
        playAudio(1);          

        setTimeout(function () {
          $("#b").css("background-color", "red");
        }, 800);
      }
      else if (x == 3) {
        $("#c").css("background-color", "khaki");
        playAudio(2);          

        setTimeout(function () {
          $("#c").css("background-color", "gold");
        }, 800);
      }
      else if (x == 4) {
        $("#d").css("background-color", "skyblue");
        playAudio(3);          

        setTimeout(function () {
          $("#d").css("background-color", "royalblue");
        }, 800);
      }
      i++;
      // Cuando la CPU termine su secuencia...
      if (i == cpuTurnToClick.length) {
        clearInterval(myInterval);
        // Se desbloquea al usuario para que pueda pulsar.
        isUserBlocked = false;
      }
    }, 1000);
    
    /* Resetea iCheck, pues será necesario más adelante.
     * Valor -1 pues en cuanto haga click el usuario se pone a 0 */
    iCheck = -1;
    // Actualiza el marcador.
    $("#displayLed").text(gameTurn);
    gameTurn++;
    cpuTurn = false;
    
  }
  
  /* Función para comenzar el juego */
  function start() {
    // Así quedan habilitados los botones para el usuario.
    isUserBlocked = false;
    
    // Habilitado el turno de la máquina.
    cpuTurn = true;
    // Inicializa el array con 20 números aleatorios.
    for (var i = 0; i < 20; i++) {
      randomNumbers[i] = Math.ceil((Math.random() * 4));
    }
    
    //Resetea variables necesarias.
    cpuTurnToClick = new Array();
    buttonsClicked = new Array();
    gameTurn = 1;
    
	/*
    //DEBUG
    console.log('randomNumbers[] = ' + randomNumbers);
	*/
    
    cpuPlay();
  }
  
  /* Función para recargar el juego */
  function resetGame() {
    setTimeout(function() {
      location.reload();
    }, 3000);
  }
  
  
  
  /* ==== FUNCIONALIDAD BOTONES JUGADOR ==== */
  
  $('#a').on('click', function() {
    if (!isUserBlocked) {
      playAudio(0);
      iCheck++;
      buttonsClicked.push(1);
      checkGameStatus();
	  /*
      //DEBUG
      console.log('Secuencia usuario: ' + buttonsClicked);
	  */
    }
  });
  
  $('#b').on('click', function() {
    if (!isUserBlocked) {
      playAudio(1);
      iCheck++;
      buttonsClicked.push(2);
      checkGameStatus();
	  /*
      //DEBUG
      console.log('Secuencia usuario: ' + buttonsClicked);
	  */
    }
  });
  
  $('#c').on('click', function() {
    if (!isUserBlocked) {
      playAudio(2);
      iCheck++;
      buttonsClicked.push(3);
      checkGameStatus();
	  /*
      //DEBUG
      console.log('Secuencia usuario: ' + buttonsClicked);
	  */
    }
  });
  
  $('#d').on('click', function() {
    if (!isUserBlocked) {
      playAudio(3);
      iCheck++;
      buttonsClicked.push(4);
      checkGameStatus();
	  /*
      //DEBUG
      console.log('Secuencia usuario: ' + buttonsClicked);
	  */
    }
  });
  
  
  /* === COMPRUEBA EL ESTADO DEL JUEGO === */
  function checkGameStatus () {
    // Si el usuario consigue acertar todas las secuencias, pues gana.
    if (buttonsClicked.length == randomNumbers.length -1) {
      $("#displayLed").text("WIN!");
      resetGame();
    }
    
    // Si el usuario falla, la CPU repite la secuencia de nuevo.
    if (buttonsClicked[iCheck] != cpuTurnToClick[iCheck]) {
      // En caso de estar jugando en modo Strict.
      if (strict) {
        $("#displayLed").text("ERR!");
        // Comienza desde el turno 1.
        setTimeout(function() {
          start();
        }, 1000); 
      }
      // En caso de estar jugando en modo normal.
      else {
        $("#displayLed").text("ERR!");
        cpuTurn = true;
        // Necesario resetear el array para llevar el conteo desde el principio.
        buttonsClicked = new Array();
        
        // Necesario bajar un turno de juego.
        gameTurn--;
        // Y se quita el último elemento de los botones que debe pulsar la CPU.
        cpuTurnToClick.pop();
        // Vuelve a jugar la CPU.
        setTimeout(function() {
          cpuPlay();
        }, 2000);
      }
    }
      
    // Si la secuencia del usuario y la del PC son iguales.
    if (JSON.stringify(buttonsClicked) == JSON.stringify(cpuTurnToClick)) {
      // Necesario resetear el array para llevar el conteo desde el principio.
      buttonsClicked = new Array();
      cpuTurn = true;
      // Vuelve a jugar la CPU.
      setTimeout(function() {
        cpuPlay();
      }, 1000);
    }
  }
  
  
  /* ==== FUNCIONALIDAD DEL SONIDO ==== */
  function playAudio(num) {
    var a = new Audio(audioFiles[num]);
    a.play();
  }
   
});