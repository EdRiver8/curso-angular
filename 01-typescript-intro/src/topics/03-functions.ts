// las funciones en ts son un tipo de dato que se puede asignar a una variable, pasar como argumento a otra función,
// y retornar como valor de otra función
// en ts, las funciones pueden tener argumentos con tipos de datos específicos, y pueden retornar un tipo de dato específico
// las funciones en ts pueden tener argumentos opcionales, argumentos por defecto, y argumentos rest
// las funciones en ts pueden tener un tipo de retorno específico, o no retornar nada
// las funciones en ts pueden tener un tipo de retorno genérico
// las funciones en ts pueden tener un tipo de retorno inferido
// las funciones en ts pueden tener un tipo de retorno condicional
// las funciones en ts pueden tener un tipo de retorno que es una función
// un ejemplo de función en ts es la función que suma dos números

function addNumbers(a: number, b: number): number {
    return a + b;
}

// funcion flecha que suma dos números
const addNumbersArrow = (a: number, b: number): number => a + b;

function multiplyNumbers(a: number, b?: number, base: number = 2): number {
    return a * base;
}

// const result: number = addNumbers(1, 2);
// const resultArrow: number = addNumbersArrow(1, 2);
// const resultMultiply: number = multiplyNumbers(1, 2, 2);

// console.log({result});
// console.log({resultArrow});

interface Character {
    hp: number;
    name: string;
    attack?: (target: Character) => void;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const goku: Character = {
    hp: 100,
    name: 'Goku',
    showHp() {
        console.log(`Puntos de vida de ${this.name}: ${this.hp}`);
    }
}

goku.showHp();

healCharacter(goku, 20);

goku.showHp();

const vegeta: Character = {
    hp: 100,
    name: 'Vegeta',
    showHp() {
        console.log(`Puntos de vida de ${this.name}: ${this.hp}`);
    }
}

vegeta.showHp();

healCharacter(vegeta, 10);

vegeta.showHp();

// en ts no existen las clases abstractas, pero se pueden simular con interfaces
// las interfaces en ts pueden tener método abstractos, que son métodos que no tienen implementación
// las interfaces en ts pueden tener propiedades abstractas, que son propiedades que no tienen valor
// las interfaces en ts pueden tener métodos y propiedades abstractas
// las interfaces en ts pueden tener métodos y propiedades opcionales
// las interfaces en ts pueden tener métodos y propiedades de solo lectura
// las interfaces en ts pueden tener métodos y propiedades de solo escritura
// las interfaces en ts pueden tener métodos y propiedades estáticas
// las interfaces en ts pueden tener métodos y propiedades privadas
// las interfaces en ts pueden tener métodos y propiedades protegidas
// las interfaces en ts pueden tener métodos y propiedades públicas
