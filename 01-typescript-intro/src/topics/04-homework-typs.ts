// interface SuperHero{
//     name: string;
//     age: number;
//     address: {
//         street: string;
//         country: string;
//         city: string;
//     };
//     showAddres: () => string;
// }

interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddres: () => string;
}

interface Address{
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'El Chapulin',
    age: 35,
    address: {
        street: 'La Vecindad',
        country: 'Mexico',
        city: 'DF'
    },
    showAddres(){
        // return `${this.name}, ${this.address.city}, ${this.address.country}`
        return this.name + ', ' + this.address.city + ', ' + this.address.country
    }
}

console.table(superHero);
const address = superHero.showAddres;
console.log(address)