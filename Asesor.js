import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  asesorado;

  constructor (nombre, familia, edad, estado, asesorado) {
    super(nombre, familia, edad, estado);
    this.asesorado;
  }

  comunicar () {
    return "No sé por qué, pero creo que voy a morir pronto";
  }

}

export default Asesor;