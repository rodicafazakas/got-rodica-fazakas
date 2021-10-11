import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor () {
    super(nombre, familia, edad, estado);
    this.arma;
    this.destreza;
  }

  comunicar () {
    return "Primero pego y luego pregunto";
  }

}

export default Luchador;