import Personaje from './Personaje.js';

class Rey extends Personaje {
  anosReinado;

  constructor(nombre, familia, edad, estado) {
    super(nombre, familia, edad, estado); // llamar el constructor de la clase padre
    this.anosReinado = anosReinado; 
  }

  comunicar () {
    return "Vais a morir todos";
  }
}

export default Rey;
