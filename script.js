
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
    
    document.getElementById("sujeto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("text-salida").innerHTML = txtcif; 
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var entrada = document.getElementById("texto-entrada").value.toLowerCase();
    var txtdes = entrada.replace(/enter/igm, "e");
    var txtdes = txtdes.replace(/imes/igm, "i");
    var txtdes = txtdes.replace(/ober/igm, "o");
    var txtdes = txtdes.replace(/ai/igm, "a");
    var txtdes = txtdes.replace(/ufat/igm, "u");

    document.getElementById("sujeto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("text-salida").innerHTML = txtdes;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";  
}

function copiar(){
    let copy = document.querySelector("#text-salida");
    copy.select();
    document.execCommand("copy");
    alert("¡Se copio!")
}