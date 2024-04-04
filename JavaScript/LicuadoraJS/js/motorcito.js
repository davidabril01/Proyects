var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora === "apagada"){
        estadoLicuadora = "encendida";
        hacerBrrBrr();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
    }
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        sonidoLicuadora.play();
        botonLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
