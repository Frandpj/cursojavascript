// function crearPersona (nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }

// Para devolver un objeto en una función de flecha que solo tiene un return tenemos que poner parentesis
const crearPersona = (nombre, apellido) => ({nombre, apellido})
const persona = crearPersona('Fran', 'del Pino');
console.log(persona);

// arguments trae todos los argumentos que se hayan metido al llamar la función
function imprimeArgumentos() {
    console.log(arguments);
}

// Para la función de flecha, tenemos que usar el rest (...) para sacar todos los argumentos
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

// Se puede poner clave a los valores que se retornan creando un array con los nombres
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fran', 'Hola');
console.log({casado, vivo, nombre, saludo});

// Se puede extraer un argumento de una función por su nombre, incluso renombrar la nueva variable
const {apellido: nuevoApellido} = crearPersona('Fran', 'del Pino');
console.log({nuevoApellido});

// Desectructuración
let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// Si se le pone un valor a una destructuración, si el argumento al que se llama no existe, le pone el valor predefinido
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) =>  {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony)