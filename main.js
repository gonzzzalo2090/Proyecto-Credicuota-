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
    
   const userMain = {
        montoFinal: montoFinal.value,
        cuotaFinal: cuotaFinal.value ,
        intereses: totalADevolver - montoFinal.value ,
        totalADevolver: totalADevolver,
    }


    obtenerCuotaDelPrestamo(userMain);
    pintarPrestamo(userMain)
    sincronizarStorage(userMain)
})

const obtenerCuotaDelPrestamo = ({montoFinal, cuotaFinal}) => {
    const cuotaPrestamo = tasa * montoFinal / (1 - (1+tasa) ** - cuotaFinal)
    obtenerTotal(cuotaPrestamo);
} 
 
const obtenerTotal = (cuotaPrestamo) => {
    const totalADevolver = Math.ceil(cuotaPrestamo) * cuotas.value;
    pintarPrestamo(totalADevolver)
}


function pintarPrestamo ({montoFinal, cuotaFinal, intereses, totalADevolver}){
    montoFinal.textContent = montoFinal; 
    cuotaFinal.textContent = cuotaFinal;
    intereses.textContent = totalADevolver - montoFinal;
    totalADevolver.textContent = totalADevolver;
}

/***********************local storage **************/
function sincronizarStorage(userMain) {
    localStorage.setItem('userMain', JSON.stringify(userMain));
}

export default function recuperarPrestamo(){
    let usuarioPrestamo = JSON.parse(localStorage.getItem('userMain'));
    pintarPrestamo(usuarioPrestamo)
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


