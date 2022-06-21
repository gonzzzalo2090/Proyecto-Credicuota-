import recuperarUsuario from "./registrate.js"
// importar la función pintarPrestamo
import recuperarPrestamo from "./main.js"

document.addEventListener("DOMContentLoaded", () => {
    recuperarUsuario();
    // Invocar la función pintar prestamo
    recuperarPrestamo();
})