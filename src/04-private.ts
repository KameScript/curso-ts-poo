/**
 * 04 - Acceso privado
 *
 * Podemos restringir el acceso a las propiedades y métodos para que no
 * sean accedidos o modificados por fuera de la clase, usando el modificador de acceso private.
 */

export class MyDate {
  year: number;
  month: number;
  // --- Private ---
  // Con el modificador de acceso private, estamos restringiendo el
  // acceso de nuestras propiedades y métodos, solo podrán ser
  // accedidos o modificados dentro de la clase.
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// myDate.addPadding(12); // Error: El método 'addPadding' es privado y solo se puede acceder dentro de la clase 'MyDate'.
// myDate.day = 12; // Error: La propiedad 'day' es privada y solo se puede modificar dentro de la clase 'MyDate'.
// console.log(myDate.day); // Error: La propiedad 'day' es privada y solo se puede acceder dentro de la clase 'MyDate'.
console.log(myDate.getDay()); // Si queremos acceder al valor de una propiedad privada, podemos crear un método público que nos retorne ese valor.
