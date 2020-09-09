var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
//while mientras lo que este pasando dentro () sea verdad se va a generar ese loops

while (estudiantes.lenght > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
//Hola Maria
//Hola Sergio
//Hola Rosa
//Hola Daniel
