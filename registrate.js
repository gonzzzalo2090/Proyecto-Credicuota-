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


/*************************btn flotante - tasas e interes***************/
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const footer2 = document.querySelector('#footerRegistrate');

footerRegistrate.addEventListener('click', mostrarOcultar2);
function mostrarOcultar2() {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Tasas e Intereses';
    }else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar Tasas e intereses';
    }
}

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

function recuperar(){
    const nombreStorage = localStorage.getItem('nombre');
    const dniStorage = localStorage.getItem('dni');
    const emailStorage = localStorage.getItem('email');
    const telefonoStorage = localStorage.getItem('telefono');
}


