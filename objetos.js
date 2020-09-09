//var objeto = {};

var miAuto = {
  // propiedades = palabras claves y valores
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function () {
    //mi modelo    mi año this hace referencia al objeto global o sea miAuto
    console.log(`Auto ${this.modelo} ${this.año}`);
  },
};
//para traer el objeto que necesitamos se pone la variable y un punto. y la palabra clave q queremos saber
miAuto.marca;
miAuto.modelo;
miAuto.annio;
//llamar a la funcion ();
miAuto.detalleDelAuto();
