/**
 * 06 - Getters
 *
 * Es una forma controlada de acceder a las propiedades privadas de una clase, es decir,
 * es un método que nos permite obtener el valor de una propiedad privada de una clase.
 */

export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    // Las propiedades privadas que tengan un getter o setter,
    // se les agregue normalmente un guión bajo (_) al inicio del nombre de la propiedad para diferenciarlas de las propiedades públicas.
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  // --- Get ---
  // Con get accedemos a una propiedad privada, se puede acceder a la propiedad pero no se puede modificar.
  get day() {
    // Aquí podemos ejecutar código para validar o transformar el valor antes de retornarlo.
    return this._day;
  }

  // Es un método que se ve como una propiedad,
  // no necesariamente tiene que retornar el valor de una propiedad privada,
  // puede retornar cualquier valor o ejecutar cualquier código.

  // Se extiende como si fuera una propiedad más de la clase, pero en realidad es un método getter que por fuera se puede leer como si fuera una propiedad.
  get isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // Por definición, los getters tienen que retornar algo, aunque se modifique la firma para retornar void.
  // get myReturn(): void {}
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
// Desde afuera se puede acceder como si fuera una propiedad pública, pero en realidad es un método getter que nos retorna el valor de la propiedad privada _day.
console.log(myDate.day);
// myDate.day = 2323; // Error: No se puede modificar.
console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
