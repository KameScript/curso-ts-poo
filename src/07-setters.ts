/**
 * 07 - Setters
 *
 * Es una forma controlada de modificar las propiedades privadas de una clase, es decir,
 * es un método que nos permite establecer el valor de una propiedad privada de una clase y las reglas que debería cumplir.
 */

export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  // --- Set ---
  // Es similar a get, pero en lugar de retornar un valor,
  // establece un valor a una propiedad privada.

  // Los setters reciben un parámetro que es el nuevo valor que se quiere establecer a la propiedad privada,
  // y dentro del setter podemos ejecutar código para validar ese nuevo valor antes de asignarlo a la propiedad privada.

  // En un setter no se puede retornar un valor, por definición es un void, simplemente lo que debe hacer es una modificación.
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Month out of range');
    }
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('Run', myDate.month);
myDate.month = 78;
console.log('Esto no debe aparecer', myDate.month);
