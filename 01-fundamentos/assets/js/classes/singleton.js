class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        // Si no existe la instancia, la creamos
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    
        return this;
    }
}

const instancia1 = new Singleton('Spiderman');
const instancia2 = new Singleton('Ironman');
const instancia3 = new Singleton('Capitan America');

console.log(`Nombre de la instancia 1: ${instancia1.nombre}`);
console.log(`Nombre de la instancia 2: ${instancia2.nombre}`);
console.log(`Nombre de la instancia 3: ${instancia3.nombre}`);