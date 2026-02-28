/**
 * 05 - Constructor
 *
 * Es el método en el que construimos la instancia y mandamos
 * los parámetros por defecto por el cual queremos que se inicialice
 * esa instancia a un objeto.
 */

export class MyDate {
  // Definición de propiedades
  // year: number;
  // month: number;
  // private day: number;

  // Asignación de propiedades dentro del constructor
  // constructor(year: number, month: number, day: number) {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  // TypeScript nos provee un shortcut para definir y asignar las propiedades de una clase dentro del constructor,
  // usando el modificador de acceso (public, private, protected) antes del nombre de la propiedad,
  // de igual forma podemos agregar valores por defecto a las propiedades, lo que hace que si no se pasan argumentos al crear una instancia,
  // se usen esos valores por defecto.
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}

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
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) =>', myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>', myDate4.printFormat());
