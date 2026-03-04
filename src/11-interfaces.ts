/**
 * 11 - Interfaces
 *
 * Las interfaces en clases funcionan como un contrato que define la estructura de una clase, es decir,
 * nos permite tipar las propiedades y métodos que una clase debe implementar, pero no proporciona la implementación de esos métodos.
 */

// En una interfaz, por defecto todas las propiedades y métodos son públicos.
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// };

// --- Implements ---
// Para que una clase cumpla con el contrato definido por una interfaz,
// debemos usar la palabra reservada implements seguida del nombre de la interfaz.
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    // Si queremos agregar una propiedad privada a nuestra clase,
    // podemos hacerlo sin ningún detalle,
    // ya que las interfaces solo definen la estructura de la clase, lo importante es cumplir con esa estructura,
    // no restringen la definición de propiedades o métodos adicionales a los definidos en la interfaz.
    private host: number
  ) {}

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    // code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }
}
