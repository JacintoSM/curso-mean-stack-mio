function sumar(valorMemoria, valorDisplay){
    let suma ;
    suma =valorMemoria+valorDisplay;
    $("#display").html(suma);
}
function multiplicar(valorMemoria, valorDisplay){
    let resultado ;
    resultado =valorMemoria*valorDisplay;
    $("#display").html(resultado);
}
function restar(valorMemoria, valorDisplay){
    let resta ;
    resta =valorMemoria-valorDisplay;
    $("#display").html(resta);
}
function dividir(valorMemoria, valorDisplay){
    let cociente ;
    cociente =valorMemoria/valorDisplay;
    $("#display").html(cociente);
}