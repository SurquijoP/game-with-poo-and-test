import { Personaje } from "./abstract_characters.js";
import { Guerrero, Mago } from "./characters.js";
import { instanceOrigin } from "./origin.js";

// INTANCE Characters
const aragorn = new Guerrero(
    "Aragorn",
    10,
    100,
    20,
    instanceOrigin("Ciudadela de Minas Tirith", "Aragorn")
);
const gandalf = new Mago(
    "Gandalf",
    12,
    80,
    30,
    instanceOrigin("NAN", "Gandalf")
);

/**
 * //*
 * const newPersonaje = new Personaje //                                ERROR Clase abstracta no se puede instanciar.
 * 
 * //*
 *   gandalf.origin.getOrigin();                                        Herencia por composicion.
 * 
 *  const radagast = new Mago("Radagast", 15, 50, 50);                  Nueva instancia diferente a cualquier otro mago instanciado
 * //*
 * 
 *  const radagast = gandalf /                                          CREA una referencia al objeto original lo que cualquier cambio modifica al otro objeto de manera bilateral
 *  radagast.nivel = 20
 *  radagast.salud = 100
 *  radagast.poderMagico = 1000
 * 
 * //* 
 *  const radagast = JSON.parse(JSON.stringify(gandalf));               COPIA superficial sin copiar metodos o constructores.
 * 
 * //*
 *  const radagast = Object.create(gandalf); //                         Crea una nueva instancia con valores y metodos de otra totalmente diferente.
 * radagast.nombre = "Radagast"
 * radagast.salud = 200;
 
 * radagast.obtenerEstadisticas();
 * gandalf.obtenerEstadisticas();
 * 
 * //*
 * console.group(gandalf._code)                                         Error al intentar acceder a una propiedad privada sera igual a Undefined 
 * gandalf.getCode();                                                    Accede por un metodo publico a una propiedad privada.
 * 
 */

aragorn.atacar(gandalf);
aragorn.atacar(gandalf);
gandalf.atacar(aragorn);
aragorn.atacar(gandalf);
aragorn.atacar(gandalf);
aragorn.atacar(gandalf);
aragorn.atacar(gandalf);
