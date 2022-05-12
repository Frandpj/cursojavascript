const fran = {
    nombre: 'Fran',
    edad: 24,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pepe = {
    nombre: 'Pepe',
    edad: 26,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// Se debe de crear con la palabra new
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pipo = new Persona('Pipo', 40);
const eli = new Persona('Elizabeth', 20);

// console.log(pipo, eli);
pipo.imprimir();
eli.imprimir();