//scope es el alcance que tienen las variables
//dos tipos de Scope Global y Local
//scope global no puede tener acceso al Scope local
var nombre = "Diego";
//scope local adentro de una funcion puede tener acceso al Scope global
function fun() {
  var apellido = "Pizarro";
  return nombre + "" + apellido;
}
console.log(apellido); //va  a dar apellido is not definde porque esta afuera del Scope Local
