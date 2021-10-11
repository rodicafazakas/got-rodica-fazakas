import Personaje from './Personaje.js';
import Rey from './Rey.js';
import Escuder from './Escudero.js';
import Luchador from "./Luchador.js";
import Asesor from './Asesor.js';

const joffrey = new Rey("Joffrey Baratheon");
const jaime = new Luchador("Jaime Lannister");
const daenerys = new Luchador("Daenerys Targaryen");
const tyrion = new Asesor("Tyrion Lannister",daenerys);
const bronn =  new Escuder("Bronn", jaime);

const personajeList = [joffrey, jaime, daenerys, tyrion, bronn];

const communicationFunction = function (arg) {
  arg.map( x => x.comunicar());
}  

communicationFunction(personajeList);