import Personaje from "./Personaje.js";

class Escuder extends Personaje {
  master;
  gradoPelotismo;

  constructor (nombre, familia, edad, estado, master, gradoPelotismo) {
    super(nombre, familia, edad, estado);
    this.master;
    this.gradoPelotismo;
  }

  comunicar () {
    return "Soy un loser";
  }

}

export default Escuder;