/**
 * 13 - Singleton: constructor privado
 *
 * Se crea solo una instancia de un objeto,
 * y además garantiza un punto de acceso único a esa instancia.
 */

export class MyService {
  // En una propiedad estática guardamos esa única instancia de la clase.
  static instance: MyService | null = null;

  // Los constructores también tienen un acceso,
  // y al colocarlo de forma privada, solo se puede acceder desde dentro de la clase.
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Debería entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// const myService1 = new MyService('Service 1'); // Error: El constructor de MyService es privado, no se pueden crear instancias de MyService desde fuera de la clase.
const myService1 = MyService.create('Service 1');
console.log(myService1.getName());

// const myService2 = new MyService('Service 2'); // Error: El constructor de MyService es privado, no se pueden crear instancias de MyService desde fuera de la clase.
const myService2 = MyService.create('Service 2');
console.log(myService2.getName());

const myService3 = MyService.create('Service 3');
console.log(myService3.getName());

console.log(myService1 === myService2);
