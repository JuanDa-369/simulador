function calcular() {
    // Limpiar errores previos
    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";

    let valorIngresos = document.getElementById("txtIngresos").value.trim();
    let valorEgresos = document.getElementById("txtEgresos").value.trim();
    let valorMonto = document.getElementById("txtMonto").value.trim();
    let valorPlazo = document.getElementById("txtPlazo").value.trim();
    let valorTasa = document.getElementById("txtTasaInteres").value.trim();

    let hayError = false;

    // Validaciones campo por campo
    if (valorIngresos === "" || isNaN(valorIngresos) || parseFloat(valorIngresos) < 0) {
        document.getElementById("errorIngresos").textContent = "Ingrese un valor numérico válido (mayor o igual a 0).";
        hayError = true;
    }
    if (valorEgresos === "" || isNaN(valorEgresos) || parseFloat(valorEgresos) < 0) {
        document.getElementById("errorEgresos").textContent = "Ingrese un valor numérico válido (mayor o igual a 0).";
        hayError = true;
    }
    if (valorMonto === "" || isNaN(valorMonto) || parseFloat(valorMonto) <= 0) {
        document.getElementById("errorMonto").textContent = "Ingrese un monto mayor a 0.";
        hayError = true;
    }
    if (valorPlazo === "" || isNaN(valorPlazo) || parseInt(valorPlazo) <= 0) {
        document.getElementById("errorPlazo").textContent = "Ingrese un plazo en años válido.";
        hayError = true;
    }
    if (valorTasa === "" || isNaN(valorTasa) || parseFloat(valorTasa) < 0) {
        document.getElementById("errorTasaInteres").textContent = "Ingrese una tasa de interés válida (>= 0).";
        hayError = true;
    }

    if (hayError) {
        return;
    }

    // Conversiones y cálculos
    let ingresos = parseFloat(valorIngresos);
    let egresos = parseFloat(valorEgresos);
    let monto = parseInt(valorMonto);
    let plazo = parseInt(valorPlazo);
    let tasa = parseInt(valorTasa);

    let totalDisponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").textContent = "USD " + totalDisponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(totalDisponible);
    document.getElementById("spnCapacidadPago").textContent = "USD " + capacidadPago.toFixed(2);

    let interesPagar = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("spnInteresPagar").textContent = "USD " + interesPagar.toFixed(2);

    let totalPrestamo = calcularTotalPagar(monto, interesPagar);
    document.getElementById("spnTotalPrestamo").textContent = "USD " + totalPrestamo.toFixed(2);

    let cuota = calcularCuotaMensual(totalPrestamo, plazo);
    document.getElementById("spnCuotaMensual").textContent = "USD " + cuota.toFixed(2);

    let esAprobado = aprobarCredito(capacidadPago, cuota);
    let etiquetaEstado = document.getElementById("spnEstadoCredito");
    
    if (esAprobado == true) {
        etiquetaEstado.textContent = "CRÉDITO APROBADO";
    } else {
        etiquetaEstado.textContent = "CRÉDITO RECHAZADO";
    }
}

function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";

    document.getElementById("spnDisponible").textContent = "USD 0.00";
    document.getElementById("spnCapacidadPago").textContent = "USD 0.00";
    document.getElementById("spnInteresPagar").textContent = "USD 0.00";
    document.getElementById("spnTotalPrestamo").textContent = "USD 0.00";
    document.getElementById("spnCuotaMensual").textContent = "USD 0.00";
    document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";
}