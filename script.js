
/*
function prueba2(){
    alert("Listo")
}*/


function encriptar(){
    var entrada = document.getElementById("texto-entrada").value.toLowerCase();
    var txtcif = entrada.replace(/e/igm, "enter");
    var txtcif = txtcif.replace(/i/igm, "imes");
    var txtcif = txtcif.replace(/o/igm, "ober");
    var txtcif = txtcif.replace(/a/igm, "ai");
    var txtcif = txtcif.replace(/u/igm, "ufat");
    
    alert(txtcif); 
}

function desencriptar(){
    var entrada = document.getElementById("texto-entrada").value.toLowerCase();
    var txtdes = entrada.replace(/enter/igm, "e");
    var txtdes = txtdes.replace(/imes/igm, "i");
    var txtdes = txtdes.replace(/ober/igm, "o");
    var txtdes = txtdes.replace(/ai/igm, "a");
    var txtdes = txtdes.replace(/ufat/igm, "u");

    alert(txtdes); 
}