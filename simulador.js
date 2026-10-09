
function calcular() {
    const ingresos = parseFloat(document.getElementById("txtIngresos").value);
    const egresos = parseFloat(document.getElementById("txtEgresos").value);
    const monto = parseInt(document.getElementById("txtMonto").value, 10);
    const plazo = parseInt(document.getElementById("txtPlazo").value, 10);
    const tasa = parseInt(document.getElementById("txtTasaInteres").value, 10);

    const mensajeError = document.getElementById("lblMensajeError");
    const estadoCredito = document.getElementById("spnEstadoCredito");
    const panelEstado = estadoCredito.closest(".estado-credito");

    mensajeError.textContent = "";
    mensajeError.classList.remove("visible");

    const valores = [ingresos, egresos, monto, plazo, tasa];

    if (valores.some(valor => !Number.isFinite(valor))) {
        mensajeError.textContent = "Completa todos los campos con valores numéricos válidos.";
        mensajeError.classList.add("visible");
        return;
    }

    if (ingresos < 0 || egresos < 0 || monto <= 0 || plazo <= 0 || tasa < 0) {
        mensajeError.textContent = "Los ingresos y egresos no pueden ser negativos. El monto y el plazo deben ser mayores que cero; la tasa no puede ser negativa.";
        mensajeError.classList.add("visible");
        return;
    }

    const totalDisponible = calcularDisponible(ingresos, egresos);
    const capacidadPago = calcularCapacidadPago(totalDisponible);
    const interesPagar = calcularInteresSimple(monto, tasa, plazo);
    const totalPagar = calcularTotalPagar(monto, interesPagar);
    const cuotaMensual = calcularCuotaMensual(totalPagar, plazo);
    const aprobado = aprobarCredito(capacidadPago, cuotaMensual);

    const formatoUSD = valor => "USD " + valor.toFixed(2);

    document.getElementById("lblDisponibleValor").textContent = formatoUSD(totalDisponible);
    document.getElementById("lblCapacidadValor").textContent = formatoUSD(capacidadPago);
    document.getElementById("lblInteresValor").textContent = formatoUSD(interesPagar);
    document.getElementById("lblTotalValor").textContent = formatoUSD(totalPagar);
    document.getElementById("lblCuotaValor").textContent = formatoUSD(cuotaMensual);

    estadoCredito.textContent = aprobado ? "CREDITO APROBADO" : "CREDITO RECHAZADO";

    panelEstado.classList.remove("aprobado", "rechazado");
    panelEstado.classList.add(aprobado ? "aprobado" : "rechazado");
}

function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    document.getElementById("lblDisponibleValor").textContent = "USD 0.00";
    document.getElementById("lblCapacidadValor").textContent = "USD 0.00";
    document.getElementById("lblInteresValor").textContent = "USD 0.00";
    document.getElementById("lblTotalValor").textContent = "USD 0.00";
    document.getElementById("lblCuotaValor").textContent = "USD 0.00";

    const estadoCredito = document.getElementById("spnEstadoCredito");
    estadoCredito.textContent = "PENDIENTE DE CÁLCULO";
    estadoCredito.closest(".estado-credito").classList.remove("aprobado", "rechazado");

    const mensajeError = document.getElementById("lblMensajeError");
    mensajeError.textContent = "";
    mensajeError.classList.remove("visible");
}