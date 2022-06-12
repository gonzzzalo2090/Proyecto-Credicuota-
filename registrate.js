/*********************REgistrate **********************/
const nombreCompleto = document.getElementById("nombreApellido");
const dniCompleto = document.getElementById("dni");
const emailCompleto = document.getElementById("email");
const telefonoCompleto = document.getElementById("telefono");

const formularioRegistrate = document.getElementById("formRegistrate");

const registrarNombre = document.getElementById("registrarNombre");
const registrarDni = document.getElementById("registrarDni");
const registrarEmail = document.getElementById("registrarEmail");
const registrarTelefono = document.getElementById("registrarTelefono");

formularioRegistrate.addEventListener("submit",(e) => {
    e.preventDefault();
    
    registrarNombre.textContent = nombreCompleto.value; 
    registrarDni.innerText = dniCompleto.value ;
    registrarEmail.innerText = emailCompleto.value ;
    registrarTelefono.innerText = telefonoCompleto.value ;   
})
