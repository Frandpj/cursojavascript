let a = 10;

if(a >= 10) {
    console.log('A es mayor o igual a 10');
}
else {
    console.log('A es menor a 10');
}
// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDate();

console.log({dia});

if(dia === 0) {
    console.log('Domingo');
}
else if(dia === 1) { 
    console.log('Lunes');
}
else if(dia === 2) {
    console.log('Martes');
}
else {
    console.log('No es lunes, martes o domingo');
}

// Sin usar If else o switch, unicamente objetos
dia = 3;

diaLetras = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    0: 'Domingo',
}

diaLetras2 = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Día de la semana
console.log(diaLetras2[dia]);