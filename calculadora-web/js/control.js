var memoria;
calculadora = new Calculadora();
function agregarAlDisplay(valor){
    //TODO: Tengo que ingresar en el input el valor que me llega
    let pantalla;
 pantalla= $("#display").eval + valor;
 $("#display").html(pantalla);   

}
function operacion(operador){
    //TODO; en caso de que me llegue un +
        //TODO: Almacenarlo en la memoria
    //TODO: en caso de que me llegue un igual
        // TODO: llamar a la calculadora con el valor de memoria, el valor del display 
        calculadora.sumar(memoria,document.getElementById("display"));
    if( "+"== operador){
      memoria = $("#display").eval;
      $("#display").html("   ");
      if($("#display").html =="="){
          calculadora.sumar(memoria,document.getElementById("#display").eval);
      }
     } 
if( "*"== operador){
      memoria = $("#display").eval;
      $("#display").html("  ");
      if($("#display").html =="="){
          calculadora.multiplicar(memoria,document.getElementById("#display").eval);
      }
     } 
if( "/"== operador){
      memoria = $("#display").eval;
      $("#display").html("   ");
      if($("#display").html =="="){
          calculadora.dividir(memoria,document.getElementById("#display").eval);
      }
     } 
if( "-"== operador){
      memoria = $("#display").eval;
      $("#display").html("   ");
      if($("#display").html =="="){
          calculadora.restar(memoria,document.getElementById("#display").eval);
      }
     } 
     
}