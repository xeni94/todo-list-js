var input = document.getElementById("task");
var button = document.getElementById("buttonTask");
var ulElement = document.getElementById("tasks");
var searchElement = document.getElementById("searchTask");
let closeTask = document.getElementsByClassName("close");


//Funcion que añade tarea en la lisa
function addElementToList() { 
    var valueInput = input.value; //valor que introducimos: la tarea
    if (valueInput == "") {
        window.alert("campo vacio"); // si no añadimos nada
    
    }else {
        var liElement = document.createElement("li"); //se crea un elemento li, hay que decirle donde
        document.getElementById("tasks").innerHTML += `<li>${valueInput}<i class="close bi bi-trash"></i></li>`; //elemento.innerHTML(entrar en el conteido del elemento) y concatenar o añadir (+=)
        input.value = ""; // input vacio una vez añadida la tarea
        handleDeleteEvent();
    }    
}

//Funcion que escucha el click para eliminar la tarea 
function handleDeleteEvent() {
    closeTask = document.getElementsByClassName("close");
    for(let i=0; i<closeTask.length; i++) {
        closeTask[i].addEventListener("click", function() {
            this.parentNode.remove();
        });
    };
}
handleDeleteEvent(); //llamamos la funcion para que se ejecute, sino de primeras no nos elimina nada. 

//escucha evento del click
button.addEventListener("click", function() { 
    addElementToList();    //llamamos la funcion (par que se añada un elemento a la lista cuando hacemos click).
});

//identifica el Enter.
input.addEventListener("keyup", function(event) {
    if  (event.key === "Enter") { 
        addElementToList();
    }
});

//BUSCADOR

//Escuchar el evento de escribir

let items = ulElement.getElementsByTagName("li"); //recojo los elemntos que se dicen "li"
searchElement.addEventListener("keyup", function(event){ //evento de apretar tecla en el buscador 
    const inputSearch = searchElement.value; //guardamos el texto de la busqueda
    for (let i=0; i<items.length; i++) {
        let itemsLowerCase = items[i].innerText.toLowerCase(); //li, texto, minusculas
        if (itemsLowerCase.includes(inputSearch.toLowerCase())) {
            items[i].style.display = "block";
        }else {
            items[i].style.display = "none"; //desaparece el li no encontrado
        };
    }
})

