import { Personaje } from "./abstract_characters.js";

export class Guerrero extends Personaje {
    //HERENCIA: Clase toma constructor y metodos de una clase de tipo mayor.
    /**
     * 
     * @param {string} nombre 
     * @param {number} nivel 
     * @param {number} salud 
     * @param {number} fuerza 
     * @param {function(@param {string} origin, @param {string} name)}  
     */
    constructor(nombre, nivel, salud, fuerza, origin) {
        super(nombre, nivel, salud);
        this.fuerza = fuerza;
        this.origin = origin;
    }

    atacar(objetivo) {
        // POLIMORFISMO: Mismo metodo que su clase superior con difirente respuesta.
        if (objetivo.dead === true) {
            return console.log(
                `${objetivo.nombre} esta muerto y no puede ser atacado!`
            );
        }
        if (objetivo.salud !== 0) {
            console.log(
                `${this.nombre} ataca a ${objetivo.nombre} con una espada, infligiendo ${this.fuerza} de daño.`
            );
        }
        objetivo.recibirDaño(this.fuerza);
    }
}

export class Mago extends Personaje {
    //HERENCIA
    /**
     * 
     * @param {string} nombre 
     * @param {number} nivel 
     * @param {number} salud 
     * @param {number} fuerza 
     * @param {function(@param {string} origin, @param {string} name)}  
     */
    constructor(nombre, nivel, salud, poderMagico, origin) {
        super(nombre, nivel, salud);
        this.poderMagico = poderMagico;
        this.origin = origin;
    }

    atacar(objetivo) {
        // POLIMORFISMO
        if (objetivo.dead === true) {
            return console.log(
                `${objetivo.nombre} esta muerto y no puede ser atacado!`
            );
        }
        if (objetivo.salud !== 0) {
            console.log(
                `${this.nombre} lanza un hechizo a ${objetivo.nombre}, infligiendo ${this.poderMagico} de daño mágico.`
            );
        }
        objetivo.recibirDaño(this.poderMagico);
    }
}
