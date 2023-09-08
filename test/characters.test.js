import { Mago, Guerrero } from "../src/characters.js";
import { expect } from "chai";

describe("recibirDaño", () => {
    it("debería reducir la salud del personaje correctamente", () => {
        const personaje = new Mago("Personaje1", 10, 100);
        personaje.recibirDaño(20);
        expect(personaje.salud).to.equal(80);
    });

    it("debería marcar al personaje como muerto si su salud llega a cero", () => {
        const personaje = new Mago("Personaje2", 10, 30);
        personaje.recibirDaño(30);
        personaje.obtenerEstado();
        expect(personaje.dead).to.equal(true);
    });

    it("no debería reducir la salud si el personaje ya está muerto", () => {
        const personaje = new Mago("Personaje3", 10, 0);
        personaje.recibirDaño(50);
        expect(personaje.salud).to.equal(0);
    });
});

describe("obtenerEstado", () => {
    it("debería marcar al personaje como en combate cuando recibe daño", () => {
        const personaje = new Guerrero("Personaje4", 10, 100);
        personaje.recibirDaño(20);
        expect(personaje.combat).to.equal(true);
    });

    it("debería marcar al personaje como muerto cuando su salud llega a cero", () => {
        const personaje = new Guerrero("Personaje5", 10, 30);
        personaje.recibirDaño(30);
        personaje.obtenerEstado();
        expect(personaje.dead).to.equal(true);
    });
});
