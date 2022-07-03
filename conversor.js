const monedaUno = document.getElementById('moneda-uno')
const monedaDos = document.getElementById('moneda-dos')
const cantidadUno= document.getElementById('cantidad-uno')
const cantidadDos = document.getElementById('cantidad-dos')
const cambio = document.getElementById('cambio')
const taza = document.getElementById('taza')

const calculate = ()=>{
    const primerMoneda = monedaUno.value;
    const segundaMoneda = monedaDos.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${primerMoneda}`)
    .then(res => res.json())
    .then(data => {
        const laTaza = data.rates[segundaMoneda];
        cantidadDos.value = (cantidadUno.value * laTaza).toFixed(2);
    });
}

//eventos
monedaUno.addEventListener('change', calculate);
cantidadUno.addEventListener('input', calculate);
monedaDos.addEventListener('change', calculate);
cantidadDos.addEventListener('input', calculate);

taza.addEventListener('click', () => {
    const swap = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value = swap;
    calculate();
});


calculate()