//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let disponible= ingresos - egresos;
    if (disponible < 0 ){
        return 0;
    }
    return disponible;
}
function calcularCapacidadPago(disponible) {
    let capacidad = disponible * 0.5;
    return capacidad;
}
function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto * (tasa / 100);
    return interes;
}
function calcularTotalPagar(monto, interes) {
    let total = monto + interes + 100;
    return total;
}