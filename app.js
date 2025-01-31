// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombre = []
let amigosMax = 5;

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();
    if(amigo === ""){
        alert("Ingrese un nombre valido")
        return;
    }
    //Nombre Repetido no aceptado
    if(listaNombre.includes(amigo)){
        alert("El nombre ya fue ingresado")
        return;
    }
    //maximo de amigos
    if(listaNombre.length === amigosMax){
        alert("Lista de amigos completa")
        document.getElementById("amigo").value = "Hora de jugar"
        return;
    }
    listaNombre.push(amigo)
    document.getElementById("amigo").value = ""//limpiar input
    document.getElementById("amigo").focus()
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");//Selecionar lista
    listaAmigos.innerHTML = ""; //limpiar lista

    for(let i = 0; i < listaNombre.length; i++){
        let item = document.createElement("li");//crear elemento
        item.textContent = listaNombre[i];//agregar texto
        listaAmigos.appendChild(item);//agregar a la lista  
     }
    
    }

function sortearAmigo(){
    
}    











mostrarAmigos();
agregarAmigo();

