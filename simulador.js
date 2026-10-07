//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let cajaIngresos = document.getElementById("txtIngresos").value; 
    let ingresos = parseFloat(cajaIngresos);

    let cajaEgresos = document.getElementById("txtEgresos").value;
    let egresos = parseFloat(cajaEgresos);

    let totalDisponible = calcularDisponible(ingresos, egresos);

    let etiquetaDisponible = document.getElementById("spnDisponible");
    etiquetaDisponible.textContent = totalDisponible;

    let capacidadPago = calcularCapacidadPago(totalDisponible);

    let etiquetaCapacidad = document.getElementById("spnCapacidadPago");
    etiquetaCapacidad.textContent = capacidadPago;
}