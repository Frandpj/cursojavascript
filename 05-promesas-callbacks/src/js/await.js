import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
// Array con 3 promesas
const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

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

export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
    
        return heroe;
    } catch (err) {
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}

// For en una promesa
export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // El await espera a que la promesa se resuelva (todas las promesas del for)
    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    // const heroes = await Promise.all(heroesPromesas)
    // heroes.forEach(heroe => console.log(heroe));

    console.timeEnd('HeroesCiclo');
}

// If en una promesa
export const heroeIfAwait = async(id) => {
    // El await espera a que la promesa se resuelva para poder sacar el nombre con tipo string
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    }
    else {
        console.log('Naa');
    }
}