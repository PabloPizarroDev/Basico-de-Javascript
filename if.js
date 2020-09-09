//Condicionales son reglas si es verdadero o falso
//lo que esta entre () tiene que ser verdad true
//if = si es verdad    else = sino es verdad
if (true) {
  console.log("Hola");
} else {
  console.log("soy falso");
}
//if else = Si if no es verdad puede ser esto
var edad = 18;

if (edad === 18) {
  console.log("Hey puedes votar!! sera tu primera votacion!!");
} else if (edad > 18) {
  console.log("Puedes Votar denuevo!");
} else {
  console.log("Aun no puedes votar");
}

//operarior ternario generar un if ? y un else : en una sola linea
condicion ? true : false;
var numero = 1;
var resultado = numero === 1 ? "soy un uno" : "no soy uno";
