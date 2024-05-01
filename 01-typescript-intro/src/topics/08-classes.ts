// las clases en ts son muy parecidas a las clases en otros lenguajes de programación
// las clases en ts se definen con la palabra reservada class seguida del nombre de la clase
// en este caso la clase se llama Animal las clases en ts pueden tener propiedades y métodos
// una propiedad llamada name que es de tipo string las propiedades pueden ser públicas o privadas
// por defecto las propiedades son públicas las propiedades públicas se pueden acceder desde fuera de la clase
// las propiedades privadas solo se pueden acceder desde dentro de la clase
// para definir una propiedad privada se antepone el modificador private al nombre de la propiedad
// en este caso la propiedad name es privada las clases en ts pueden tener un constructor
// el constructor es un método especial que se ejecuta cuando se crea una instancia de la clase
// el constructor se define con la palabra reservada constructor seguida de los parámetros que recibe
// las clases en ts pueden tener métodos y se definen dentro del cuerpo de la clase
// las clases en ts pueden tener métodos estáticos y se definen con la palabra reservada static seguida
// del nombre del método
// las clases en ts pueden tener métodos de acceso y definen con las palabras reservadas get y set seguidas
// del nombre del método para acceder a los métodos de acceso se utiliza la sintaxis de los métodos
// las propiedades estáticas se definen con la palabra reservada static seguida del nombre de la propiedad
// las propiedades estáticas se pueden acceder desde fuera de la clase
// las clases en ts pueden tener propiedades de solo lectura y se definen con la palabra reservada readonly
// seguida del nombre de la propiedad y solo se pueden asignar en el constructor
// una vez asignado un valor a una propiedad de solo lectura no se puede cambiar

export class Person {
  //   public name: string;
  //   private age: number;
  //   private address: string;

  //   constructor(){ // constructor por defecto
  //     this.name = "";
  //     this.age = 0;
  //     this.address = "";
  //   }

  //   constructor(name: string, age: number, address: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //   }

  // en ts esta es la mejor manera de definir propiedades y asignarles un valor, desde el constructor
  constructor(
    public name: string,
    private age: number,
    private address: string = "Kame House" // valor por defecto
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const person = new Person("Goku", 30, "Kame House");
console.log(person);

// vamos a extender la clase Person, al extender una clase se heredan las propiedades y métodos de la clase padre
// para extender una clase se utiliza la palabra reservada extends seguida del nombre de la clase padre
// en este caso la clase ZWarrior extiende de la clase Person
// la clase ZWarrior tiene una propiedad powerLevel que es de tipo number y tiene un valor por defecto de 0
// la clase ZWarrior tiene un constructor que recibe cuatro parámetros el nombre, la edad, la dirección y el powerLevel
// el constructor de la clase ZWarrior llama al constructor de la clase Person con la palabra reservada super
// y le pasa los parámetros que recibe el constructor de la clase ZWarrior y el powerLevel que recibe el constructor
// de la clase ZWarrior se asigna a la propiedad powerLevel de la clase ZWarrior el valor que recibe el constructor
// de la clase ZWarrior
export class ZWarrior extends Person {
  constructor(
    name: string,
    age: number,
    address: string = "Kame House",
    public powerLevel: number = 0
  ) {
    super(name, age, address);
    this.powerLevel = powerLevel;
  }
}

// se crea una instancia de la clase ZWarrior con el nombre Goku, la edad 30, la dirección Kame House y el powerLevel 9000
// una instancia es un objeto que se crea a partir de una clase en este caso la instancia se llama warrior
// y es un objeto de la clase ZWarrior se imprime en consola la instancia warrior
const warrior = new ZWarrior("Goku", 30, "Kame House", 9000);
console.log(warrior);

// cuando se herdad o extiende de otras clases, es preferible utilizar la composición en lugar de la herencia
// la composición es una técnica de programación orientada a objetos que consiste en crear una clase que
// contiene instancias de otras clases en lugar de heredar de ellas en este caso la clase ZWarrior tiene
// una propiedad person que es de tipo Person y se inicializa con una instancia de la clase Person
// en el constructor de la clase ZWarrior se crea una instancia de la clase Person con los parámetros
// que recibe el constructor de la clase ZWarrior y se asigna a la propiedad person de la clase ZWarrior
// de esta manera se evita la herencia y se utiliza la composición para reutilizar código y evitar problemas
// de acoplamiento entre las clases
export class ZWarrior2 {
  // public person: Person;
  constructor(
    name: string,
    age: number,
    address: string = "Kame House",
    public powerLevel: number = 0,
    public person: Person
  ) {
    this.person = new Person(name, age, address);
    this.powerLevel = powerLevel;
  }
}

const person2 = new Person("Goku", 30, "Kame House");
const warrior2 = new ZWarrior2(
  "Goku",
  30,
  "Kame House",
  9000,
  //   person2
  new Person("Goku", 30, "Kame House")
);

console.log(warrior2);
