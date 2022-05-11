/**
 * 2C = Two of Clubs
 * 2D = Two of Diamons
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0;
let puntosPc = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const marcadores = document.querySelectorAll('small');

// Crear una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Devuelve una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    let carta = deck.pop();
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor))  ? 
    (valor === 'A') ? 11 : 10
    : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    marcadores[0].innerText = puntosJugador;
    
    
});