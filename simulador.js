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

    let cajaMonto = document.getElementById("txtMonto").value;
    let monto = parseInt(cajaMonto);

    let cajaPlazo = document.getElementById("txtPlazo").value;
    let plazo = parseInt(cajaPlazo);

    let cajaTasa = document.getElementById("txtTasaInteres").value;
    let tasa = parseInt(cajaTasa);

    let interesPagar = calcularInteresSimple(monto, tasa, plazo);

    let etiquetaInteres = document.getElementById("spnInteresPagar");
    etiquetaInteres.textContent = interesPagar;
    
    let totalPrestamo = calcularTotalPagar(monto, interesPagar);

    let etiquetaTotal = document.getElementById("spnTotalPrestamo");
    etiquetaTotal.textContent = totalPrestamo;
}