// arreglo de habilidades de un saiyajin, de tipo string
let skills: string[] = ['Kamehameha', 'Spirit Bomb', 'Solar Flare', 'Instant Transmission', 
'Super Saiyan', 'Ultra Instinct', 'Kaio-Ken', 'Dragon Fist', 'Fusion Dance', 'Final Flash', 
'Big Bang Attack', 'Galick Gun', 'Masenko', 'Special Beam Cannon', 'Destructo Disc', 'Tri-Beam', 
'Wolf Fang Fist', 'Solar Kamehameha', 'Super Ghost Kamikaze Attack', 'Hellzone Grenade', 
'Death Ball', 'Death Beam', 'Death Saucer', 'Death Wave', 'Supernova', 'Nova Strike', 
'Final Shine Attack', 'Final Explosion', 'Final Kamehameha', 'Final Flash', 'Final Spirit Cannon', 
'Final Galick Cannon', 'Final Masenko', 'Final Impact', 'Final Revenger', 'Final Burst Cannon', 
'Final Burst Attack', 'Final Flasher'];

// una interfaz en ts es un contrato que define las propiedades y métodos que un objeto debe tener
interface Character {
    name: string;
    hpPoints: number | 'FULL';
    isAlive: boolean;
    hometown?: string;
    skills: string[];
}

// un objeto que implementa la interfaz Character
const goku: Character = {
    name: 'Goku',
    hpPoints: 100,
    isAlive: true,
    skills: ['Kamehameha', 'Spirit Bomb', 'Solar Flare', 'Instant Transmission', 'Super Saiyan', 'Ultra Instinct', 'Kaio-Ken']
}

goku.hometown = 'Planet Vegeta';

console.table(goku);

// esta linea se usa para prevenir errores de redeclaración
export{}; // To prevent the redeclaration error