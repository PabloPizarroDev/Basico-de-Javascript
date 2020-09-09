//es una estructura de datos tipo objetos que va a guardar mas datos adentro
//pueden ser numero string objetos y hasta mas arrays adentro
//lista de datos que pueden guardar varios valores []
//es la forma sintaxis de armar un array
var frutas = ["Manzana", "Platano", "Cereza", "Fresas"];

console.log(frutas.length);
// va a mostrar 4 es la cantidad de string que tiene nuestro array
console.log(frutas[0]);
//va a mostrar "Manzana"
console.log(frutas[2]);
//va a mostrar "Cereza"

//va añadir por ultimo al elementos dentro del array
var masFrutas = frutas.push("Uva");
//frutas["Manzana", "Platano", "Cereza", "Fresas","Uva"];

var ultimo = frutas.pop();
//va a eliminar el utlimo elemento del array
//frutas["Manzana", "Platano", "Cereza", "Fresas"];

var primero = frutas.unshift("Uva");
//va agregar al principio del array
//frutas["Uva","Manzana", "Platano", "Cereza", "Fresas"];

var borrarFruta = frutas.shift("Uva");
//va a eliminar un elemento del array
//frutas["Manzana", "Platano", "Cereza", "Fresas"];

var posicion = frutas.indexOf("Cereza");
//va a traer la posicion del index de cierto elemento del array
//frutas [2]
