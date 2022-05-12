// Forma básica de inicializar una clase
class Persona {

    // Métodos estáticos, se puede acceder a ellos sin necesidad de instanciar la clase
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
       this.nombre = nombre;
       this.codigo = codigo;
       this.frase = frase;
       Persona._conteo++;
    }

    // Setters y getters
    set setComida(comida) {
        this.comida = comida.toUpperCase();
    }
    
    get getComida() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();
spiderman.setComida = 'Pizza';
// spiderman.nemesis = 'Duende verde';

// console.log(spiderman);
// console.log(spiderman.getComida);

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Propiedad externa';
console.log(Persona.propiedadExterna);
console.log(Persona);