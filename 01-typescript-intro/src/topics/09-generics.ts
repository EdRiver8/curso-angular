// Genericos en ts son un tipo de dato que se define en tiempo de ejecucion y que se puede reutilizar en diferentes partes del codigo
// Ejemplo de generico en una funcion que recibe un argumento de tipo generico
export function whatsMyType<T>(argument: T): T {
  return argument;
}

// const amIString = whatsMyType("Hello World");
const amIString = whatsMyType<string>("Hello World"); // obliga a que el argumento sea de tipo string
console.log(amIString);
console.log(amIString.split(" ")); // ["Hello", "World"];

// const amINumber = whatsMyType(42);
const amINumber = whatsMyType<number>(42); // obliga a que el argumento sea de tipo number
console.log(amINumber);
console.log(amINumber.toFixed(2));

// const amIBoolean = whatsMyType(true);
const amIBoolean = whatsMyType<boolean>(true); // obliga a que el argumento sea de tipo boolean
console.log(amIBoolean);
console.log(amIBoolean.valueOf());

// const amIArray = whatsMyType([1, 2, 3, 4, 5]);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]); // obliga a que el argumento sea de tipo array de numeros
console.log(amIArray);
// console.log(amIArray.map((n) => n * 2));
console.log(amIArray.join(" - "));

export {};
