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
            resolve(heroe);
        }
        else {
            reject(`No se encontró un héroe con el id ${id}`);
        }
    });
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promesa Rápida'), 1000);
});

export  {
    promesaLenta,
    promesaMedia,
    promesaRapida
}