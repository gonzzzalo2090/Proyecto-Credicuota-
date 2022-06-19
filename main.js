'use strict'

const monto = document.getElementById("monto");
const cuotas = document.getElementById("cuotas");

const formulario = document.getElementById("form");

const tasa = 0.01; //1%

const montoFinal = document.getElementById("montoFinal");
const cuotaFinal = document.getElementById("cuotaFinal");
const intereses = document.getElementById("intereses");
const totalADevolver = document.getElementById("totalADevolver");

let cuotaPrestamo;

formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    
    obtenerCuotaDelPrestamo();
    sincronizarStorage()
})

const obtenerCuotaDelPrestamo = () => {
    const cuotaPrestamo = tasa * monto.value / (1 - (1+tasa) ** - cuotas.value)
    obtenerTotal(cuotaPrestamo);
} 
 
const obtenerTotal = (cuotaPrestamo) => {
    const total = Math.ceil(cuotaPrestamo) * cuotas.value;
    pintarPrestamo(total)
}

const pintarPrestamo = (total) => {
    montoFinal.textContent = monto.value; 
    cuotaFinal.textContent = cuotas.value ;
    intereses.textContent = total - monto.value ;
    totalADevolver.textContent = total ;
}
/***************************btn flotante *************/
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const footer2 = document.querySelector('#footer2');

footer2.addEventListener('click', mostrarOcultar2);
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

/***********************local storage **************/
function sincronizarStorage() {
    localStorage.setItem('monto solicitado',(montoFinal.textContent));
    localStorage.setItem('cuotas elegidas',(cuotaFinal.textContent));
    localStorage.setItem('intereses',(intereses.textContent));
    localStorage.setItem('total a devolver',(totalADevolver.textContent));
}


