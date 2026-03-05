import axios from 'axios';
import { Product } from './models/product.model';

/**
 * 01 - Tipando respuestas HTTP
 *
 * El tipado de las respuestas HTTP nos permite tener una mejor experiencia de desarrollo,
 * ya que tenemos autocompletado y evitamos errores al acceder a propiedades que no existen en la respuesta.
 */

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {
  // Tipado desde el retorno en funciones asíncronas.
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // Tipado desde el cast por medio de aserción de tipos con as, cuando la librería no soporta genéricos.
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[]; //
  //   return data;
  // }

  // Tipado en Axios.
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));
})();
