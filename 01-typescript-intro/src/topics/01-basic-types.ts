const name: string = 'Kakarot';
let hpPoints: number | 'FULL' = 100;
// hpPoints = '100'; // Error: Type 'string' is not assignable to type 'number'
const isAlive: boolean = true;

console.log(name, hpPoints, isAlive);




// esta linea preventiva se usa para prevenir errores de redeclaración
// un error de redeclaración ocurre cuando se intenta declarar una variable que ya ha sido declarada
// en este caso, se está declarando una variable llamada kakarot que ya fue declarada en otro archivo
export{}; // To prevent the redeclaration error