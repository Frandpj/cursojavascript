import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesId = ['capi', 'iron', 'spider'];

/**
 * Hacemos la función async para poder utilizar el await
 * El await lo que hace es esperar a que la promesa se resuelva
 * para poder continuar con la ejecución con lo cual, la función se espera a que buscarHeroeAsync
 * acabe de resolverse y devuelva el heroe para poder continuar con la ejecución
 */
export const obtenerHeroesArr = async() => {
    const heroesArr = [];

    for (const id of heroesId) {
        // Devuelve una promesa
        const heroe = await buscarHeroeAsync(id);
        // Agrega el heroe al array
        heroesArr.push(heroe);
    }

    return heroesArr;
};