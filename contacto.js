var nombre = document.getElementById("nombre")
var email = document.getElementById("email")
var mensaje = document.getElementById("mensaje")
var asunto = document.getElementById("asunto")

var btn = document.querySelector(".btn_contacto").addEventListener("click",validar);

function validar(event){
    event.preventDefault()

    var error = document.querySelector('#error')
    error.style.color = 'red'
    
    var expresion = /\w+@\w+\.+[a-z]/

    var mensajesError = []
    
    if(nombre.value ==""){
        mensajesError.push("nombre ")
        nombre.focus()
    }
    if(email.value ==""){
        mensajesError.push("email ")
        email.focus()
    }
    if(mensaje.value ==""){
        mensajesError.push("mensaje ")
        mensaje.focus()
    }
    if(mensajesError.length > 0){
    error.textContent = "Por favor complete los siguientes campos: " + mensajesError;
    }
    else{
        error.textContent = "";
        nombre.value ="";
        email.value ="";
        mensaje.value ="";
        asunto.value ="";
    }
}