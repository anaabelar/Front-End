const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

//função limpar campo
function clearInput() {
    nome.value = "";
}
button.addEventListener("click", function(event) {
   event.preventDefault();
   const inputValue = nome.value;
   const templateHTML = `<li>${inputValue}</li>`;

   lista.innerHTML = templateHTML;

   nome.value = "";

   nome.value = "";
}); 