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

    sincronizarStorage()
})


/********************************btn flotante */
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultar);


function mostrarOcultar() {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent('Idioma y moneda');
    }else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent('X Cerrar');
    }
}

/*********************local storage ***************/
function sincronizarStorage() {
    localStorage.setItem('nombre',(registrarNombre.textContent));
    localStorage.setItem('dni',(registrarDni.innerText));
    localStorage.setItem('email',(registrarEmail.innerText));
    localStorage.setItem('telefono',(registrarTelefono.innerText));
}
