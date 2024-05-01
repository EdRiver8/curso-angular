// los decoradores son funciones que se ejecutan en tiempo de ejecución y que permiten modificar o extender
// la funcionalidad de una clase, método, propiedad o parámetro.
// Los decoradores se pueden utilizar en TypeScript a partir de la versión 1.5.
// Para habilitar esta funcionalidad, debemos habilitar la opción experimentalDecorators en el archivo tsconfig.json.
// {
//   "compilerOptions": {
//     "experimentalDecorators": true
//   }
// }
// Los decoradores se pueden aplicar a una clase, a un método, a una propiedad o a un parámetro.
// Un decorador es una función que se ejecuta en tiempo de ejecución y que recibe tres argumentos:
// target: si el decorador se aplica a una clase, target será la función constructora de la clase.
// key: si el decorador se aplica a una propiedad o a un método, key será el nombre de la propiedad o del método.
// descriptor: si el decorador se aplica a una propiedad o a un método, descriptor será un objeto que contiene información
// sobre la propiedad o el método.
// Para aplicar un decorador a una clase, a un método, a una propiedad o a un parámetro, debemos preceder el nombre del decorador
// con un signo @.
// Ejemplo de decorador que se aplica a una clase:
// function log(target: Function) {
//   console.log(target);
// }

// el operador rest (...) se utiliza para agrupar los argumentos de una función en un array.
// ya que el número de argumentos de una función puede variar, el operador rest nos permite trabajar con un número variable de argumentos.
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log(constructor);
}

@classDecorator
class SuperClass {
  public myProperty: string = "Hello World";
  print() {
    console.log(this.myProperty);
  }
}

console.log("SuperClass:", SuperClass); // se imprime la definicion de la clase SuperClass

const myClass = new SuperClass();
myClass.print(); // Hello World
console.log(myClass); // SuperClass { myProperty: 'Hello World' }
