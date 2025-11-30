alert("¡Bienvenido/a a Cafetería Saul, el mejor café de Hermosillo!");

let tiempoRestante=30; // tiempo en minutos

const spanSegundos=document.getElementById("promoSegundos");

function actualizarTemporizador(){
    tiempoRestante--;

    spanSegundos.textContent=tiempoRestante;
    if(tiempoRestante===0){
        spanSegundos.textContent="0";

        alert("¡La promoción ha terminado!");

        tiempoRestante=30; // reiniciar el temporizador
        spanSegundos.textContent=tiempoRestante;
    }
}

setInterval(actualizarTemporizador,1000);


const bannerPromo=document.getElementById("bannerPromo");
const cerrarBanner=document.getElementById("cerrarBanner");

cerrarBanner.addEventListener("click",function(){
    bannerPromo.style.display="none";
});