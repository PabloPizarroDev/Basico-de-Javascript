//ciclo mientras que sea verdad va a seguir sucediendo o hasta que se rompa dejando de ser verdad
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
//hay que hacer una tarea
function saludarEstudiantes(estudiantes) {
  console.log(`Hola, ${estudiante}`);
}
//iniciamos un loops
for (var i = 0; i < estudiantes.length; i++) {
  //traemos la funcion
  saludarEstudiantes(estudiantes[i]);
}
//i vale 0 va a traer a Maria
//va a ir aumentando i++ [1] y asi hasta i >= [4]
//Hola Maria
//Hola Sergio
//Hola Rosa
//Hola Daniel

//otra forma
//vamos a llamar a los estudiante del array de estudiantes
for (var estudiante of estudiantes) {
  //traemos la funcion
  saludarEstudiantes(estudiante);
}
//Hola Maria
//Hola Sergio
//Hola Rosa
//Hola Daniel
