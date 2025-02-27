//Obtém os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

//Variavel resultado
const resultado = document.getElementById("resultado");

function limparCampos() {
    valor1.value = "";
    valor2.value = "";
}

function tempo() {
    setTimeout(function () {
       resultado.innerHTML = "anaju"
    }, 2000)
}

//Criando função SOMA 
function somar(event) {
    event.preventDefault();
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);

    resultado.innerHTML = resultadoSoma;

    //limpar campos
    limparCampos();

    //função tempo
    tempo();

}

// Função Sub 
function sub(event) {
    event.preventDefault();

    let resultadoSub = Number(valor1.value) - Number(valor2.value);

    resultado.innerHTML = resultadoSub;

    //limpar campos
    limparCampos();

    //função tempo
    tempo();
}


// Função Mult 
function mult(event) {
    event.preventDefault();

    let resultadoMult = Number(valor1.value) * Number(valor2.value);

    resultado.innerHTML = resultadoMult;

    //limpar campos
    limparCampos();

    //função tempo
    tempo();
}

// Função Div 
function div(event) {
    event.preventDefault();

    let resultadoDiv = Number(valor1.value) / Number(valor2.value);

    resultado.innerHTML = resultadoDiv;

    //limpar campos
    limparCampos();

    //função tempo
    tempo();
}