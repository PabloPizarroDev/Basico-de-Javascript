var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];
//va a filtrar el pedido de la funcion va a mostrar los articulos menores a 500
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});
//mapea todo el contenido del array, muestra todo lo que le pida en este caso los nombres
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
//Metodos find() va a buscar y validar un true o un false del articulo
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});
//Metodos foreach() va hacer un filtardo y me va a regresar cosas
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});
//Metodos some() va a validar true o false del articulo que cumpla esa validacion si exiten tal funcion solo va a decir si hay o no
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
//Metodo push() nos permite agregar uno o mas elementos al final de un array tanto numero como string
//Array inicial
let newArray = [1, 2, 3, 4, 5];
//funcion
function newNum() {
  //Agrego elementos
  numArray.push(6, 7);
  console.log(numArray);
}
//Metodo shift() cuando necesitas eliminar un elemento del array elimina el elemento que este en el indice 0 o sea el primer elemento
let array = [1, 2, 3, 4, 5];
let shiftArray = array.shift();
console.log(array)[(2, 3, 4, 5)];
//Metodo pop() elimina el ultimo elemento del array
let array = [1, 2, 3, 4, 5];
let shiftArray = array.pop();
console.log(array)[(1, 2, 3, 4)];
