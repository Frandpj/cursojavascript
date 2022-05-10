let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Última película', personaje['ultima-pelicula']);

// Más detalles

// Elimina la propiedad del objeto
delete personaje.edad;
console.log(personaje);

// Añade una propiedad al objeto
personaje.casado = true;

// Añade un array por cada clave/valor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// No se podrá modificar las propiedades del objeto (ni agregar ni borrar)
Object.freeze(personaje);

// Añade una propiedad al objeto
personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});




