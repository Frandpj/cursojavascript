// El mayor número
const elMayor = (a, b) => (a > b) ? a : b;

// Si es miembro o no
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(20, 15)
];

console.log(amigosArr);

// if-else con ternarios
const nota = 100;
const grado = nota >= 95 ? 'A+' :
            nota >= 90 ? 'A' :
            nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
            nota >= 75 ? 'C+' :
            nota >= 70 ? 'C' : 'F';

console.log({nota, grado});