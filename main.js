'use strict'

const monto = document.getElementById("monto");
const cuotas = document.getElementById("cuotas");

const formulario = document.getElementById("form");

const tasa = 0.01; //1%
let userMain;
const montoFinal = document.getElementById("montoFinal");
const cuotaFinal = document.getElementById("cuotaFinal");
const intereseshtml = document.getElementById("intereses");
const totalADevolverhtml = document.getElementById("totalADevolver");


formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    
    userMain = {
        monto: monto.value,
        cuotas: cuotas.value,
    }

    pintarObjeto(userMain);
    obtenerCuotaDelPrestamo()
    sincronizarStorage(userMain);
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
     intereseshtml.textContent = total - monto.value ;
     totalADevolverhtml.textContent = total ;
     userMain.intereses =  total - monto.value
     userMain.totalADevolver =  total 

     sincronizarStorage(userMain)
}

function pintarObjeto( {monto,cuotas,intereses,totalADevolver } ) {
    montoFinal.textContent = monto; 
    cuotaFinal.textContent = cuotas;
    intereseshtml.textContent = intereses
    totalADevolverhtml.textContent = totalADevolver ;
}

/***********************local storage **************/
function sincronizarStorage(userMain) {
    localStorage.setItem('userMain', JSON.stringify(userMain));
}

export default function recuperarPrestamo(){
    let usuarioPrestamo = JSON.parse(localStorage.getItem('userMain'));
    if(usuarioPrestamo){
       pintarObjeto(usuarioPrestamo) 
    }
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
