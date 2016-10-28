function sumar(valorMemoria, valorDisplay){
    let suma ;
    suma =valorMemoria + valorDisplay;
    $("#display").val(suma);
}
function multiplicar(valorMemoria, valorDisplay){
    let resultado ;
    resultado =valorMemoria * valorDisplay;
    $("#display").val(resultado);
}
function restar(valorMemoria, valorDisplay){
    let resta ;
    resta =valorMemoria - valorDisplay;
    $("#display").val(resta);
}
function dividir(valorMemoria, valorDisplay){
    let cociente ;
    if (valorDisplay != 0){
    cociente =valorMemoria / valorDisplay;
    $("#display").val(cociente);
    }
}