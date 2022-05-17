import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';

//Forma larga
// promesaLenta.then(mensaje => console.log(mensaje));
// Forma corta
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

/**
 * Elm Promise.race ejecuta todas las promesas a la vez y devuelve la promesa más rápida
 * Si alguna promesa da un error la ignora a no ser que sea la más rápida
 */
Promise.race([promesaLenta, promesaMedia, promesaRapida])
.then(console.log)
.catch(console.warn);