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

    const user = {
        nombre: nombreCompleto.value,
        dni: dniCompleto.value,
        email: emailCompleto.value,
        telefono: telefonoCompleto.value,
    }

    pintardatosDeUsuario(user);
    sincronizarStorage(user);
});

function pintardatosDeUsuario( {nombre, dni, email, telefono} ) {
    registrarNombre.textContent = nombre;
    registrarDni.innerText = dni;
    registrarEmail.innerText = email;
    registrarTelefono.innerText = telefono;
}


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
        this.classList.remove('activo');
        this.textContent = 'Bases y Condiciones';
    }else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar Bases y Condiciones';
    }
}

/*********************local storage ***************/
function sincronizarStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export default function recuperarUsuario(){
    let usuarioStorage = JSON.parse(localStorage.getItem('user'));
    pintardatosDeUsuario(usuarioStorage)
}