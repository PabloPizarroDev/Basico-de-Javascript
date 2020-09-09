//funciones son un conjunto de sentencias usar ciertas sentencias con las variables que guardamos
//procedimientos tareas calculos para generar con las variables guardadas

//hay dos tipos

//Declarativas
//va inicializar un valor en la memoria y va a guardar el return
//la funcion tiene nombre miFuncion no es anonima
function miFuncion() {
  return 3;
}
miFuncion();
//Expresion
//generar una variable que esta guardando una funcion
//esta funcion se la denomina anonima porq no tiene nombre tiene nombre la variable
var miFuncion = function (a, b) {
  return a + b;
};
//De esta forma se llama a la funcion con ()
miFuncion();
