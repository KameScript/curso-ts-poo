/**
 * 09 - Acceso protegido
 *
 * Es una forma de heredar propiedades y métodos,
 * funciona como una propiedad o método privado, pero nos permite realizar herencia.
 */

export class Animal {
  // --- Protected ---
  // Es similar a private, pero nos permite realizar herencia, es decir,
  // las propiedades y métodos protegidos pueden ser accedidos desde la clase padre y desde las clases hijas, pero no desde fuera de la clase.
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  gretting() {
    return `Hello, I'm ${this.name}`;
  }

  // El método es heredado por la clase hija, pero no puede ser accedido desde fuera de la clase, es decir,
  // no se puede llamar desde una instancia de la clase hija, pero sí desde un método de la clase hija.
  protected doSomething() {
    console.log('Do');
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string,
  ) {
    // El método constructor de la clase padre, solamente puede ser llamado desde el constructor del hijo, es decir,
    // no se puede llamar desde otros métodos del hijo.
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething(); // El método doSomething es protegido, pero puede ser llamado desde un método de la clase hija.
  }

  // El método move es heredado por la clase hija, pero puede ser sobrescrito para cambiar su comportamiento, es decir,
  // se puede escribir un nuevo método move en la clase hija para cambiar el comportamiento del método move de la clase padre.
  move() {
    console.log('Moving as a dog');
    // Si igual queremos llamar el método move de la clase padre, podemos usar la palabra reservada super, que hace referencia a la clase padre.
    super.move();
  }
}

const cheis = new Dog('Cheis', 'Nico');
// cheis.name = 'Otro nombre'; // Error: La propiedad name es protegida, no puede ser accedida desde fuera de la clase.
cheis.woof(1);
// cheis.doSomething(); // Error: El método doSomething es protegido, no puede ser accedido desde fuera de la clase.
cheis.move();
