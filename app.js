//Creación de array amigos
let amigos = [];

//Función para agregar amigos en el array
function agregarAmigo() {
    let usuario = document.getElementById('amigo').value;
    if (usuario === "") {
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(usuario);
        actualizarLista();
        document.getElementById('amigo').value = '';
    }   
}

//Función que nos muestra cuales amigos estan agregados
function actualizarLista(){
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let recorrido = 0; recorrido < amigos.length; recorrido++) {
        let li = document.createElement("li");
        li.textContent = amigos[recorrido];
        ul.appendChild(li);
}
}

//Función para sortear los amigos dependiendo cuantos hayan 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No Tiene amigos para sortear")
    } else {
        let numeroSecreto = Math.floor(Math.random()* amigos.length);
        let ul = document.getElementById("resultado");
        let li = document.createElement("li");
        li.textContent =`Tu amigo secreto es: ${amigos[numeroSecreto]}`;
        ul.appendChild(li);
    }
}
//Con esta función podemos reiniciar el juego sin necesidad de dar F5
function Reiniciar() {
    amigos = [];
    let ul = document.getElementById('listaAmigos');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    let ul_2 = document.getElementById('resultado');
    ul_2.removeChild(ul_2.firstChild);
}