import axios from 'axios';

/**
 * 14 - Promesas
 *
 * TypeScript tiene promesas y callbacks para manejar el asíncronismo, pero actualmente todo se maneja con promesas utilizando async/await,
 * que es una forma más sencilla de manejar el asíncronismo,
 * ya que nos permite escribir código asíncrono de forma síncrona, es decir,
 * podemos escribir código que se lee de arriba hacia abajo, sin tener que usar callbacks o promesas anidadas.
 */

(async () => {
  function delay(time: number) {
    // El constructor de Promise recibe una función que tiene dos parámetros, resolve y reject,
    // que son funciones que se llaman para resolver o rechazar la promesa, respectivamente.

    // Podemos tipar una promesa con genéricos para saber el tipo de dato que retorna esa promesa.
    const promise = new Promise<string>((resolve) => {
      // Se espera un tiempo para simular el asíncronismo.
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    // Axios es una forma interesante de hacer requests y conectarnos a servicios web por medio del protocolo HTTP.
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // Con el async indicamos que el método o función va a retornar una promesa.
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  // Con el await, se espera a que la promesa se resuelva, quedando solamente con el valor que devuelve la promesa.
  const rta = await delay(3000);
  console.log(rta);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsV2 = await getProductsAsync();
  console.log(productsV2);
})();
