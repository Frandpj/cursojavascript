const juegosMesa = ['Brass Birmingham', 'Root', 'Café', 'Space Base'];

console.warn('For tradicional');
for (let i = 0; i < juegosMesa.length; i++) {
    console.log(juegosMesa[i]);
}

console.warn('For in');
for (let i in juegosMesa) {
    console.log(juegosMesa[i]);
}

console.warn('For of');
for (let juego of juegosMesa) {
    console.log(juego);
}