var memoria;

function agregarADisplay(valor){
    //TODO: Tengo que ingresar en el input el valor que me llega
    let pantalla;
 pantalla= $("#display").val() + valor;
 $("#display").val(pantalla);   

}
function operacion(operador){
    //TODO; en caso de que me llegue un +
        //TODO: Almacenarlo en la memoria
    //TODO: en caso de que me llegue un igual
        // TODO: llamar a la calculadora con el valor de memoria, el valor del display 
        sumar(memoria,document.getElementById("display"));
    if( "+"== operador){
      memoria = $("#display").val();
      $("#display").val("   ");
      if($("#display").val() =="="){
        sumar(memoria,document.getElementById("#display").val());
      }
     } 
if( "*"== operador){
      memoria = $("#display").val();
      $("#display").val("  ");
      if($("#display").val()=="="){
        multiplicar(memoria,document.getElementById("#display").val());
      }
     } 
if( "/"== operador){
      memoria = $("#display").val();
      $("#display").val("   ");
      if($("#display").val =="="){
        dividir(memoria,document.getElementById("#display").val());
      }
     } 
if( "-"== operador){
      memoria = $("#display").val();
      $("#display").val("   ");
      if($("#display").val =="="){
        restar(memoria,document.getElementById("#display").val());
      }
     } 
     
}