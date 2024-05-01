// una importacion es una forma de traer elementos de un archivo a otro archivo para poder usarlos en el archivo destino
// sin tener que copiar y pegar el codigo
// cuando se realiza una importacion, se importa todo el archivo y se ejecuta todo lo que haya en el
// las importaciones se hacen con el nombre del archivo y la ruta relativa al archivo sin la extension .ts
// y se pueden importar multiples elementos de un archivo con la sintaxis {elemento1, elemento2} from 'ruta'
// se pueden importar todos los elementos de un archivo con la sintaxis import * as nombre from 'ruta'
// se pueden importar elementos por defecto de un archivo con la sintaxis import nombre from 'ruta'
// se pueden importar elementos por defecto de un archivo con la sintaxis import {nombre as alias} from 'ruta'
// se pueden importar elementos por defecto de un archivo con la sintaxis import {nombre1, nombre2 as alias} from 'ruta'
import { calculateTax3 } from "./06-function-destructuring";

// usar la funcionalidad para el shopping cart de la clase-06, para ello en dicho archivo se exporta la interfaz Product y la constante shoppingCar
// escribiendo export antes de la interfaz y la constante
import {
  Product,
  shoppingCar,
  calculateTax3 as calculateTax,
} from "./06-function-destructuring";

const shoppingCar2: Product[] = [
  { name: "Motorola", price: 500, stock: 10 },
  { name: "Samsung", price: 200, stock: 5 },
  { name: "Lenovo", price: 1500, stock: 2 },
];

const [total, totalTax] = calculateTax({ product: shoppingCar2, tax: 0.15 });

console.log("Total sin impuesto", total, "Total impuesto", totalTax);

export {};
