/**
 * 08 - Herencia
 *
 * Las propiedades y métodos de una clase
 * pueden ser heredados por otra clase, lo que permite evitar redundancia de código y extender el comportamiento de la clase.
 */

export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    // De igual forma puedo extender propiedades.
    public owner: string,
  ) {
    // --- Super ---
    // Para llamar las propiedades y métodos de la clase padre, usamos la palabra reservada super, que hace referencia a la clase padre.

    // Llama al método constructor de la clase padre, es decir,
    // el constructor de la clase Animal, y le pasa el argumento name para que se asigne a la propiedad name de la clase Animal.
    super(name);
    // super.name; // Accede a la propiedad name de la clase padre.
    // super.move(); // Llama al método move de la clase padre.
  }

  // La herencia aparte de reutilizar código, no volviendo a escribir los métodos y propiedades de la clase padre,
  // permite extender el comportamiento de la clase.
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.gretting());

const cheis = new Dog('Cheis', 'Nico');
cheis.move();
console.log(cheis.gretting());
cheis.woof(5);
console.log(cheis.owner);
