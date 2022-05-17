// import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

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