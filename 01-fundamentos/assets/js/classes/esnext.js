// Propiedades privadas
class Rectangulo {
    #area = 0;
    
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calculaArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);

rectangulo.calculaArea();

console.log(rectangulo);