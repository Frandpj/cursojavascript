const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones de sangre'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absorber energía'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Super aliento'
    },
}

/**
 * En este caso, no necesita un callback
 */
export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    /**
     * La promesa siempre tiene estos dos argumentos
     * resolve: cuando todo sale bien
     * reject: cuando hay un error
     */
    return new Promise((resolve, reject) => {
        // Si el heroe existe
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
        }
        else {
            reject(`No se encontró un héroe con el id ${id}`);
        }
    });
}

/**
 * En este caso, no necesita un callback
 * Esta promesa es igual que la de arriba pero con un async
 */
 export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];

    // Si el heroe existe
    if (heroe) {
        // Esto es lo mismo que el resolve
        return heroe;
    }
    else {
        // Esto es lo mismo que el reject
        // Forma tradicional en la que solo envia el mensaje
        throw `No se encontró un héroe con el id ${id}`;
        // Forma en la que te dice el porque del error
        // throw Error(`No se encontró un héroe con el id ${id}`);
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export  {
    promesaLenta,
    promesaMedia,
    promesaRapida
}