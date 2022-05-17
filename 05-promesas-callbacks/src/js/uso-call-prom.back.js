import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron2';


// CÓDIGO CON CALLBACKS
/**
 * Un callback es una función enviada como un argumento
 * Esta función como vemos tiene dos parámetros y uno de ellos es una función con otros dos parámetros
 * Lo que estamos haciendo aquí es recogiendo todos los heroes y comprobando que existen para poder recogerlos todos en un mensaje
 * Esto es un callback hell que se puede reducir a una sola función con una promesa
 */
// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) {
//         return console.error(err);
//     }
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
//     });
// });

// CÓDIGO CON PROMESAS
/**
 * Las promesas dejan que el código se ejecute de forma asíncrona
 * por lo tanto aunque una promesa este en proceso, el código sigue ejecutándose,
 * este código es lo mismo que el de arriba pero con promesas
 */
// buscarHeroe(heroeId1).then(heroe1 => {
//     console.log(`Enviando a ${heroe.nombre} a la misión`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
//     });
// });

/**
 * Esto es lo mismo que el de arriba pero con una sola promesa (esto es lo que se debe de hacer)
 * Se puede utilizar la desestructuración de arrays, para recoger los valores de las promesas
 * Para desestructurar un array en una función se utiliza ([valor1, valor2, valor3])
 * El promise.all es una función que recibe un array de promesas y devuelve una promesa
 * El catch es una función que recibe el error
 * El finally es una función que se ejecuta siempre, independientemente de si hay un error o no cuando acaba la promesa
 */
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
}).catch(err => {
    alert(err);
}).finally(() => {
    console.log('Se terminó el Promise.all');
});

console.log('Fin del programa');