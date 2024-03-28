document.getElementById("mostrarRespuesta").onclick = function() {
    var respuesta = document.getElementById("respuesta");
    if (respuesta.style.display === "none") {
        respuesta.style.display = "block";
    } else {
        respuesta.style.display = "none";
    }
}
