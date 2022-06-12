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

