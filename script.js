var estadoLicuadora = 'apagada';
var sonidoLicuadora = document.getElementById('blender-sound');
var botonLicuadora = document.getElementById('blender-button-sound');
var licuadora = document.getElementById('blender'); 

function controlarLicuadora() {
    if (estadoLicuadora == 'apagada'){
        estadoLicuadora = 'encendido';
        hacerBrrBrr();
        licuadora.classList.add('active');
        //*console.log('me prendiste');*/ 
    } else {
        estadoLicuadora = 'apagada';
        hacerBrrBrr();
        licuadora.classList.remove('active');
        /*console.log('me apagaste');*/
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
        console.log("Estoy haciendo BrrBrr")
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currenTime = 0;

    }
}