/**
 * 02 - Metodos
 *
 * Los metodos describen el comportamiento de los objetos.
 */

export class MyDate {
  // Propiedades o atributos => Variables (o constantes) dentro de una clase.
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Métodos => Funciones dentro de una clase.
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1993, 7, 9);
// Se puede acceder tanto a los métodos como a las propiedades de la clase.
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
