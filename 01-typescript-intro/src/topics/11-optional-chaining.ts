// el optional chaining es una caracteristica de javascript que permite acceder a propiedades de un
// objeto sin tener que validar si el objeto es nulo o indefinido antes de acceder a la propiedad
// para acceder a una propiedad de un objeto se utiliza el operador punto (.)
// si el objeto es nulo o indefinido se produce un error de tipo TypeError que detiene la ejecucion
// del programa y se debe validar si el objeto es nulo o indefinido antes de acceder a la propiedad
// con el optional chaining se puede acceder a una propiedad de un objeto sin tener que validar si el
// objeto es nulo o indefinido antes de acceder a la propiedad y si el objeto es nulo o indefinido
// se devuelve undefined en lugar de producir un error de tipo TypeError que detiene la ejecucion del programa
// el optional chaining se utiliza con el operador de interrogacion (?.) que se coloca despues de la
// propiedad a la que se quiere acceder y antes del operador punto (.) que se utiliza para acceder a la
// propiedad de un objeto y se puede encadenar con otros operadores de javascript como el operador de
// acceso a propiedades ([]) y el operador de llamada de funcion (()) para acceder a propiedades de un
// objeto y llamar a funciones de un objeto sin tener que validar si el objeto es nulo o indefinido antes
// de acceder a la propiedad o llamar a la funcion y si el objeto es nulo o indefinido se devuelve undefined
// en lugar de producir un error de tipo TypeError que detiene la ejecucion del programa

export interface Passenger {
  name: string;
  age: number;
  children?: string[];
}

const passenger1: Passenger = {
  name: "John Doe",
  age: 42,
};

const passenger2: Passenger = {
  name: "Jane Doe",
  age: 35,
  children: ["Alice", "Bob"],
};

const printChildren = (passenger: Passenger) => {
  // '?' permite traer los metodos en caso de que existan y como es un arreglo se puede usar el metodo length
  const children = passenger.children?.length ?? 0; // '??' permite asignar un valor por defecto en caso de que el valor sea null o undefined
  //   console.log(passenger.name, passenger.children?.join(", ")); // optional chaining con el operador punto (.) y el ? si existe, traiga los hijos
  console.log(passenger.name, ", # hijos: ", children); // optional chaining con el operador punto (.) y el ? si existe, traiga los hijos
};

printChildren(passenger1);
