/**
 * 10 - Static
 *
 * Las propiedades y métodos estáticos son aquellos que pertenecen a la clase en sí, en lugar de a las instancias de la clase.
 */

// No se esta creando una instancia, sino que se usa directamente la clase para acceder a la propiedad o método estático.
console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0));

class MyMath {
  // En TypeScript, la palabra clave `static` se utiliza para definir propiedades y métodos estáticos en una clase.
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}

// const math = new MyMath();
// math.PI;
// Se puede acceder a las propiedades y métodos estáticos directamente desde la clase, sin necesidad de crear una instancia.
console.log('MyMath.PI', MyMath.PI);
// MyMath.PI = 121; // Error: La propiedad es de solo lectura y no se puede modificar.
console.log('MyMath.max', MyMath.max(12, 2, 1, 1112, 9));
const numbers = [12, 2, 1, 1112, 9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('Math.max', Math.max(-1, -9, -8));
