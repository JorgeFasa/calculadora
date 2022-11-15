var variable1;
var variable2;
var calculonnnn;
function ejecutar(){
    var resultadofinal = document.getElementById('resultadofinal');
    var resetear = document.getElementById('resetear');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    uno.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "1";
    }
    dos.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "2";
    }
    tres.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "5";
    }
    seis.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "6";
    }
    siete.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "9";
    }
    cero.onclick = function(e){
        resultadofinal.textContent = resultadofinal.textContent  + "0";
    }
    resetear.onclick = function(e){
        resetearFN();
    }
    suma.onclick = function(e){
        variable1 = resultadofinal.textContent;
        calculonnnn = "+";
        limpiar();
    }
    resta.onclick = function(e){
        variable1 = resultadofinal.textContent;
        calculonnnn = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        variable1 = resultadofinal.textContent;
        calculonnnn = "*";
        limpiar();
    }
    division.onclick = function(e){
        variable1 = resultadofinal.textContent;
        calculonnnn = "/";
        limpiar();
    }
    igual.onclick = function(e){
        variable2 = resultadofinal.textContent; //aqui se añade la segunda variable
        resolver();
    }
  }

  function limpiar(){
    resultadofinal.textContent = "";
  }
  function resetearFN(){
    resultadofinal.textContent = "";
    variable1 = 0;
    variable2 = 0;
    calculonnnn = "";
  }

  function resolver(){
    var res = 0;
    switch(calculonnnn){
      case "+":
        res = parseFloat(variable1) + parseFloat(variable2);
        break;
      case "-":
          res = parseFloat(variable1) - parseFloat(variable2);
          break;
      case "*":
        res = parseFloat(variable1) * parseFloat(variable2);
        break;
      case "/":
        res = parseFloat(variable1) / parseFloat(variable2);
        break;
    }
    resetearFN();
    resultadofinal.textContent = res;
  }  