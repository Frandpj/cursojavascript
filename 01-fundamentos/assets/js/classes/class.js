// Forma básica de inicializar una clase
class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
       this.nombre = nombre;
       this.codigo = codigo;
       this.frase = frase;
    }

}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigo y vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);