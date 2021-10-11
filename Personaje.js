class Personaje {
  nombre;
  familia;
  edad;
  estado = vivos;

  constructor (nombre, familia, edad, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }

  comunicar(phrase) {
      return phrase;
  }

  morir() {
    this.estado = "dead"; 
  }
}

export default Personaje; 