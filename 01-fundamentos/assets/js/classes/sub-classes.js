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

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        // Hereda los atributos de la clase padre
        super(nombre, codigo, frase);
        this.clan = 'Los vengadores';
    }
    quienSoy() {
        console.log(`Soy ${this.nombre} del clan ${this.clan}`);
        // Llamamos al método de la clase padre
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();