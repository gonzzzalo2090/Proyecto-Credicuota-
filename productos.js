const carrito = document.getElementById("carrito");
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
const confirmarSolicitud = document.getElementById("confirmarSolicitud");
const listaTarjetas = document.getElementById("lista-cursos");



let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners () {
    listaTarjetas.addEventListener('click', agregarTarjeta);
    carrito.addEventListener('click', eliminarProducto);
    vaciarCarritoBtn.addEventListener('click',() => {
    articulosCarrito = [];
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

        swal({
            title: "Perfecto",
            text: (" ¿Quieres eliminar todo tu carrito?"),
            icon: "warning",
            confirm: "OK",
            buttons: true,
            dangerMode: true,
          }).then((result) => {
            if(result){
                limpiarHtml();
                localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
            }    
        })
    });
}






function agregarTarjeta(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const tarjetaSeleccionada = e.target.parentElement.parentElement; 
        leerDatosProducto(tarjetaSeleccionada);
        
    }
}

//eliminar cosas del carrito
function eliminarProducto(e) {
    if(e.target.classList.contains('borrar-producto')){
        const productoId = e.target.getAttribute('data-id');
        
        articulosCarrito = articulosCarrito.filter(tarjeta => tarjeta.id !== productoId);
        carritoHtml()
    }
}


//OBJETO
function leerDatosProducto(tarjeta) {
    const infotarjeta = {
        imagen: tarjeta.querySelector('img').src,
        titulo: tarjeta.querySelector('h4').textContent,
        precio: tarjeta.querySelector('.precio span').textContent,
        id: tarjeta.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

   const existe = articulosCarrito.some(objeto => objeto.id === infotarjeta.id); 
    if(existe){
        const objetos = articulosCarrito.map(objeto =>{
            if(objeto.id === infotarjeta.id){
                objeto.cantidad ++;
                return objeto; 
            }else{
                return objeto; 
            }
        });
        articulosCarrito = [...objetos];
    }else{
//Array de objetos
        articulosCarrito = [...articulosCarrito, infotarjeta]
    }

    carritoHtml()
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
    
}



//limpiar el carrito 
function limpiarHtml() {
    contenedorCarrito.innerHTML = '';
}



///Mostrar carrito en el HTML
function carritoHtml() {
    limpiarHtml()

    articulosCarrito.forEach( carrito => {
        const {imagen, titulo, precio, cantidad, id} = carrito;
        const tabla = document.createElement('tr');
        
        tabla.innerHTML= `
        <td><img src="${imagen}"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-producto" data-id=${id}> X </a>
        </td>
        `;

    contenedorCarrito.appendChild(tabla)    
    })
}


/*********************local storage ***************/
function recuperar() {
    let recuperarLs = JSON.parse(localStorage.getItem('carrito'))
        if(recuperarLs){
            for (const elemento of recuperarLs){
                carritoHtml(elemento)
                articulosCarrito.push(elemento)
                carritoHtml()
            }
        }
    }
recuperar()


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


/******************************Toastify *********************/
const agregarCarrito1 = document.getElementById("agregarCarrito1");

agregarCarrito1.addEventListener("click", () => {
    Toastify({
        text: "Añadido al carrito correctamente 🛒",
        duration: 1500,
        gravity: "top",
        position: "right",
        style: {
            borderRadius: "5rem",   
            background: "linear-gradient(to right, rgb(236, 34, 101), rgb(247, 175, 19))"
        }
    }).showToast()
})

const agregarCarrito2 = document.getElementById("agregarCarrito2");

agregarCarrito2.addEventListener("click", () => {
    Toastify({
        text: "Añadido al carrito correctamente 🛒",
        duration: 1500,
        gravity: "top",
        position: "right",
        style: {
            borderRadius: "5rem",   
            background: "linear-gradient(to right, rgb(236, 34, 101), rgb(247, 175, 19))"
        }
    }).showToast()
})


/************************SWEET ALERT*********************/
confirmarSolicitud.addEventListener("click",() => {
  
  swal({
    title: "Genial",
    text: ("Tu Solicitud de fue exitosa!"),
    icon: "success",
    confirm: "OK",
  }).then((result) => {
    if(result){
        window.location = "Bienvenido.html";
    }    
})
});

