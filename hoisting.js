//hoisting sucede desde  JS5 para abajo para JS6 para arriba ya no sucede
//porque sucede con var y function
//cuando la variables y las funciones se aplquen antes de cualquier tipo de codigo
//se declara una variable
var miNombre;
//se inicializa una variable
miNombre = "Pablo";
//Aca hay un hosting porque estoy llamando a una variables antes de inicializarla
console.log(miNombre);
var miNombre = "Pablo";
//esto va a dar undefined

//hoisting en funcion
hey();
function hey (){
  console.log("hola " miNombre);
}
var miNombre = "Pablo";
//esto va a dar Error de SintaxError falto el +
hey();
function hey (){
  console.log("hola " + miNombre);
}
var miNombre = "Pablo"
//va a salir hola undefined porque la variable hay q declarar antes de la funcion
