interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  artist: string;
  album: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 50,
  songDuration: 180,
  song: "The Beatles - Hey Jude",
  details: {
    artist: "The Beatles",
    album: "Hey Jude",
    year: 1968,
  },
};

// la desestructuración de objetos es una forma de extraer propiedades de un objeto y asignarlas a variables
// const { audioVolume, songDuration, song, details } = audioPlayer;
// console.log(audioVolume, songDuration, song, details);

// const { audioVolume, songDuration, details } = audioPlayer;

// console.log(audioVolume, songDuration, details);

// const { artist, album, year } = audioPlayer.details;
// console.log(artist);
// // artist = "The Rolling Stones"; // Error: Cannot assign to 'artist' because it is a read-only property, its a const
// console.log(artist, album, year);

// const {
//   details: { artist: artistName, album: albumName, year: albumYear },
// } = audioPlayer;

const { details } = audioPlayer;

const { artist } = details;

const song = "The Beatles - let it be"; // se puede declarar una variable con el mismo nombre que la propiedad del objeto
console.log("song por fuera del scope del objeto", song);

const { song: originalSong, songDuration: duration } = audioPlayer; // se puede cambiar el nombre de la variable que se extrae del objeto
console.log("son dentro del objeto", originalSong);

// la destructuracion de arrays es una forma de extraer elementos de un array y asignarlos a variables
const dbz = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo", "Krillin"];

console.log(
  "Personaje 1:",
  dbz[0],
  "Personaje 2:",
  dbz[1],
  "Personaje 3:",
  dbz[2] || "No hay personaje 3"
);

const [first, second, third]: string[] = dbz;

console.log(
  "Primer personaje:",
  first,
  "Segundo personaje:",
  second,
  "Tercer personaje:",
  third
);

// el tercer personaje
const [, , third2 = "Not found"] = dbz; // se puede asignar un valor por defecto si el elemento no existe

console.log("El tercer personaje es:", third2);

export {};
