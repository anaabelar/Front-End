function updateTime() {
    const timeDiv = document.querySelector("#time");
    const dataNew = new Date();

    const horas =  String(dataNew.getHours()).padStart(2, "0");
    const minutos = String(dataNew.getMinutes()).padStart(2, "0");
    const segundos =  String(dataNew.getSeconds()).padStart(2, "0");


    timeDiv.textContent = `${horas}:${minutos}:${segundos}`;

}
//Função de tempo
setInterval(updateTime, 1000);


//Chamar função
updateTime();
