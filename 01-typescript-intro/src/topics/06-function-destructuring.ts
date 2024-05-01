// calcular el impusto sobre la venta
interface Product {
  name: string;
  price: number;
  stock: number;
}

const Phone: Product = {
  name: "Phone",
  price: 500,
  stock: 10,
};

const Tablet: Product = {
  name: "Tablet",
  price: 200,
  stock: 5,
};

const Laptop: Product = {
  name: "Laptop",
  price: 1500,
  stock: 2,
};

// funcion que calcula el impuesto sobre la venta para un producto
const calculateTax = (product: Product, tax: number): number => {
  return product.price * tax;
};

interface TaxCalculationOptions {
  product: Product[];
  tax: number;
}

// cuando se pasan mas de tres parametros a una funcion, es recomendable pasar un objeto con los parametros por clean code
function calculateTax2(options: TaxCalculationOptions): number[] {
  let total = 0;
  options.product.forEach((product) => {
    total += product.price;
  });
  return [total, total * options.tax];
}

// otra forma de hacerlo es con destructuring en la funcion calculateTax2 para obtener los valores del objeto options y no tener que acceder a options.product y options.tax
// el destructuring se hace en los parametros de la funcion forEach
// adicional se sabe que siempre va a devolver dos valores, el total y el total con el impuesto, por lo que se puede usar una tupla para devolver los valores
// una tupla es un arreglo con un numero fijo de elementos y cada uno puede ser de un tipo diferente y se define con [] y los tipos separados por coma
// function calculateTax3({
//   tax,
//   products,
// }: TaxCalculationOptions): [number, number] {
function calculateTax3(options: TaxCalculationOptions): [number, number] {
  const { tax, product } = options; // destructuring en los parametros de la funcion
  let total = 0;
  product.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const tax = 0.16;
const shoppingCar = [Phone, Tablet, Laptop];
const taxAmount = calculateTax(Phone, tax);
console.log("impuesto para el telefono", taxAmount);

// para calcular el impuesto para varios productos, recibe un arreglo de productos y el impuesto
const resultAmount2: number[] = calculateTax2({ product: shoppingCar, tax }); // si se tiene una propiedad con el mismo nombre que la variable se puede omitir el nombre de la propiedad y solo pasar el valor, en este caso tax: tax se puede pasar solo tax

console.log(
  "Total para varios productos",
  resultAmount2[0],
  "Impuesto total",
  resultAmount2[1]
);

// ahora aplicando destructuring
const [total, totalTax] = calculateTax2({ product: shoppingCar, tax });
console.log("Total para varios productos", total, "Impuesto total", totalTax);

// destructuring en funciones
const showProduct = ({ name, price }: Product): void => {
  console.log(`Product: ${name} - Price: ${price}`);
};

showProduct(Phone);
