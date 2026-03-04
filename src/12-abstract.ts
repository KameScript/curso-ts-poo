import { Animal, Dog } from './09-protected';

/**
 * 12 - Clases abstractas
 *
 * Es una forma de restringir la creación de objetos de las clases base o clases padres, es decir,
 * no se pueden crear instancias de una clase abstracta,
 * sino que solo se pueden crear instancias de las clases hijas que heredan de la clase abstracta.
 */

// const animal = new Animal('Elite'); // Error: No se pueden crear instancias de una clase abstracta.
// animal.gretting();

const cheis = new Dog('Cheis', 'Nico');
cheis.gretting();
cheis.woof(2);
