// Función normal
function saludar(nombre) {
    console.log('Hola ' + nombre);
    return 10;
}

// Función anónima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}
// Función de flecha sin parámetros
const saludarFlecha = () => {
    console.log('Hola flecha');
}

// Función de flecha con parámetros
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar('Fran');
// console.log(retornoSaludar);
// saludar2('Fran');
// saludarFlecha('Fran');
// saludarFlecha2('Fran');

function sumar(a, b) {
    return a + b;
}

// Función de flecha solo con un return
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());