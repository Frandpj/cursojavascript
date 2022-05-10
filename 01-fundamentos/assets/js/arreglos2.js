let juegosMesa = ['Brass Birmingham', 'Yukon Airways', 'Root', 'Space base'];
console.log('Largo:', juegosMesa.length);

let primero = juegosMesa[0];
let ultimo = juegosMesa[juegosMesa.length - 1];

console.log({primero, ultimo});

// Recorre todos los elementos del array
juegosMesa.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

console.log(juegosMesa);
// Mete un nuevo valor al final del array
let nuevaLongitud = juegosMesa.push('Clank!');
console.log({nuevaLongitud, juegosMesa});

console.log(juegosMesa);
// Mete un nuevo valor al principio del array
nuevaLongitud = juegosMesa.unshift('Café');
console.log({nuevaLongitud, juegosMesa});

console.log(juegosMesa);
// Borra el último elemento del array
let juegoBorrado = juegosMesa.pop();
console.log({juegoBorrado, juegosMesa});

console.log(juegosMesa);
let pos = 1

/**
 * Borra elementos del array
 * pos: posición desde donde empieza a borrar
 * 1: número de valores que borra a partir de ese número
 */
let juegosBorrados = juegosMesa.splice(pos, 2);
console.log({juegosBorrados, juegosMesa});

console.log(juegosMesa);
// Busca en un array, si devuelve -1 es que no lo encuentra
let rootIndex = juegosMesa.indexOf('Root');
console.log(rootIndex);

// TODO: Referencia