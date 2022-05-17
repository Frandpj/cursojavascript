import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

/**
 * Hacemos la función async para poder utilizar el await
 * El await lo que hace es esperar a que la promesa se resuelva
 * para poder continuar con la ejecución con lo cual, la función se espera a que buscarHeroeAsync
 * acabe de resolverse y devuelva el heroe para poder continuar con la ejecución
 * EN ESTA FUNCIÓN SE EJECUTA LAS 3 PROMESAS A LA VEZ, NO SE DEBE DE EJECUTAR UN AWAIT EN UN CICLO FOR
 */
// export const obtenerHeroesArr = async() => {
//     const heroesArr = [];

//     for (const id of heroesIds) {
//         // Devuelve una promesa
//         heroesArr.push(buscarHeroe(id));
//     }

//     return await Promise.all(heroesArr);
// };

// Esta función es igual que la de arriba
export const obtenerHeroesArr = async() => {
    // Devuelve una promesa con un array de promesas (heroes)
    return await Promise.all(heroesIds.map(buscarHeroe));
};