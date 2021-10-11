import Personaje from './Personaje.js';

class Rey extends Personaje {
  constructor(nombre, familia, edad, estado) {
    super(nombre, familia, edad, estado); // llamar el constructor de la clase padre
  }
}
