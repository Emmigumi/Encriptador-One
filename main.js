
function encriptar(){
  var text = document.getElementById("txt-ingresante").value.toLowerCase();

  var txtCifrado = text.replace(/e/igm,"enter");
  var txtCifrado = txtCifrado.replace(/o/igm,"ober");
  var txtCifrado = txtCifrado.replace(/i/igm,"imes");
  var txtCifrado = txtCifrado.replace(/a/igm,"ai");
  var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

  document.getElementById("img-respuesta").style.display = "none";
  document.getElementById("title-respuesta").style.display = "none";
  document.getElementById("txt-respuesta").innerHTML = txtCifrado;
document.getElementById("btn-copiar").style.display = "show";
document.getElementById("btn-copiar").style.display = "inherit";
}; 

function desencriptar(){
    var text = document.getElementById("txt-ingresante").value.toLowerCase();
  
    var txtCifrado = text.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
  
    document.getElementById("img-respuesta").style.display = "none";
    document.getElementById("title-respuesta").style.display = "none";
    document.getElementById("txt-respuesta").innerHTML = txtCifrado;
  
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
  }; 
  
  function copiar(){
      var txtCopia = document.querySelector("#txt-respuesta");
      txtCopia.select();
      document.execCommand("copy");
  }
