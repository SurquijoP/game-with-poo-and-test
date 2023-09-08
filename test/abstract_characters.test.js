import { Personaje } from "../src/abstract_characters.js";
import { expect } from "chai";

describe("Personaje", () => {
    describe("constructor", () => {
        it("debería lanzar un error al intentar instanciar Personaje directamente", () => {
            expect(() => new Personaje("Juan", 5, 100)).to.throw(
                "No se puede instanciar Personaje, es una clase abstracta"
            );
        });
    });
});
