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

// Busca un heroe en el objeto heroes
export const buscarHeroe = (id, callback) => {
    // Si el id existe en el objeto heroes,
    const heroe = heroes[id];

    if (heroe) {
        // Llama a la función callback pasando el error a vacío y el heroe
        callback(null, heroe);
    }
    else {
        // Si no existe, llama a la función callback con un error
        callback(`No se encontró un héroe con el id ${id}`);
    }

    // Llama a la función callback pasando como argumento el heroe
    // callback(heroe);
}