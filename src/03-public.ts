/**
 * 03 - Acceso público
 *
 * Podemos acceder a las propiedades y métodos de una clase desde el exterior.
 */

export class MyDate {
  // --- Public ---
  // Por defecto, las propiedades y métodos de una clase son
  // públicas, pero si queremos ser explícitos, podemos usar el modificador de acceso public.
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Métodos => Funciones dentro de una clase.
  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
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

// --- Desventajas del acceso público ---
// La desventaja al tener propiedades y métodos públicos es que estas pueden ser modificadas desde fuera de la clase.
const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
