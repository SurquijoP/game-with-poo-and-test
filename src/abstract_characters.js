export class Personaje {
    //ASBTRACCION: Clase de tipo superior incapaz de ser instanciada.

    /**
     * @param {string} nombre
     * @param {number} nivel
     * @param {number} salud
     *
     */

    constructor(nombre, nivel, salud) {
        let _code = 124; //ENCAPSULAMIENTO: Valor privado al cual no se puede acceder directamente.

        this.nombre = nombre;
        this.nivel = nivel;
        this.salud = salud;
        this.combat = false;
        this.dead = false;
        this.typeCode = _code;
        if (new.target === Personaje)
            throw new Error(
                "No se puede instanciar Personaje, es una clase abstracta"
            );
        this.getCode = function () {
            console.log(_code);
        };
    }

    atacar(objetivo) {
        throw new Error(
            "El método atacar debe ser implementado en las clases derivadas."
        );
    }

    recibirDaño(daño) {
        this.obtenerEstado();
        if (this.dead === true) return;
        this.salud -= daño;
        this.salud > 0 &&
            console.log(
                `${this.nombre} ahora tiene ${this.salud} puntos de salud.`
            );
    }

    obtenerEstado() {
        if (this.salud <= 0 && this.dead === false) {
            this.dead = true;
            console.log(`${this.nombre} ha sido derrotado.`);
        } else if (this.combat === false) {
            this.combat = true;
            console.log(`${this.nombre} Esta bajo ataque.`);
        }
    }

    obtenerEstadisticas() {
        console.log({
            nombre: this.nombre,
            nivel: this.nivel,
            salud: this.salud,
        });
    }
}
