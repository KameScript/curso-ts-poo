/**
 * 01 - Class
 *
 * Una clase en TypeScript (TS) es una plantilla que
 * define la estructura y el comportamiento de un
 * objeto. Se utiliza para encapsular propiedades
 * (atributos) y métodos (funciones) relacionados.
 */

const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 enero 11 dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

class MyDate {
  // Se recomienda inicializar las propiedades que coloquemos en nuestra clase,
  // ya sea con un valor por defecto o dentro del constructor.
  year: number;
  month: number;
  day: number;

  // El constructor puede recibir parámetros para inicializar las propiedades de la clase.
  constructor(year: number, month: number, day: number) {
    // Con el operador this accedemos a las propiedades de la clase
    // y les asignamos los valores recibidos por el constructor.
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
