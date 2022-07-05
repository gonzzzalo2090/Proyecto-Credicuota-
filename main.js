'use strict'
const indexNombre = document.getElementById("indexNombre");
const indexApellido = document.getElementById("indexApellido");
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
        Nombre:indexNombre.value,
        Apellido: indexApellido.value,
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
     indexNombre.textContent = indexNombre.value
     indexApellido.textContent = indexApellido.value

     sincronizarStorage(userMain)
}

function pintarObjeto( {monto,cuotas,intereses,totalADevolver,Apellido,Nombre } ) {
    montoFinal.textContent = monto; 
    cuotaFinal.textContent = cuotas;
    intereseshtml.textContent = intereses;
    totalADevolverhtml.textContent = totalADevolver ;
    indexNombre.textContent = Nombre;
    indexApellido.textContent = Apellido;
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
/*************************btn flotante - tasas e interes***************/
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
const footerRegistrate = document.querySelector('#footerRegistrate');

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



/******************Sweet Alert ********************/


const btnSimular = document.getElementById("simular");

btnSimular.addEventListener("click",() => {
  
    swal({
      title: "Perfecto",
      text: (indexNombre.value+" "+indexApellido.value +" ¿Aceptas continuar con tu solicitud?"),
      icon: "success",
      confirm: "OK",
      buttons: true,
      dangerMode: false,
    }).then((result) => {
        if(result){
            window.location = "#simulado";
        }    
    })
  });

const btnConfirmar = document.getElementById("btnConfirmar2");

btnConfirmar.addEventListener("click",() => {
  
  swal({
    title: "Genial",
    text: (indexNombre.textContent+" "+indexApellido.textContent +" Tu credito fue aprobado!"),
    icon: "success",
    confirm: "OK",
    timer: 3000,
  }).then(function() {
    window.location = "Bienvenido.html";
});
});








