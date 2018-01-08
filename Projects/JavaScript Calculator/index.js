$(document).ready(function(){
  // Array para los inputs del usuario.
  var inputs = [""];
  // Actual cadena de texto con valor input.
  var inputStr;
  // Operadores aritméticos.
  var operators = ["+","-","/","*"];
  // Números.
  var numbers = [0,1,2,3,4,5,6,7,8,9];

  function getInput(x) {
    // Introducir los inputs en el array.
    if (inputs.length === 1 && operators.includes(x) === false) {
      inputs.push(x);
    }
    // Si el último operador no es un array, se añade.
    else if (operators.includes(inputs[inputs.length -1]) === false) {
      inputs.push(x);
    }
    // Si se trata de un número.
    else if (numbers.includes(Number(x))) {
      inputs.push(x);
    }
    update();
  }

  // Función de actualizado.
  function update() {
    inputStr = inputs.join("");
    $("#lcdText").html(inputStr);
  }

  // Función para tomar el resultado.
  function getResult() {
    inputStr = inputs.join("");
    // No se permite la división 0/0.
    if (inputStr === '0/0') {
      $("#lcdText").html('Error:0/0!!');
    }
    else {
      $("#lcdText").html(eval(inputStr));
    }
  }

  // Operaciones en pantalla.
  $("a").on("click",function(){
    if(this.id === "delete"){
      inputs = [""];
      update();
      $("#lcdText").html(0);
    }
    else if(this.id === "result"){
      getResult();
    }
    else {
      if(inputs[inputs.length -1].indexOf("+","-","/","*") === -1){
        getInput(this.id);
      }
      else {
        getInput(this.id);
      }
    }
  });
});
