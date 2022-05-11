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
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasPc = document.querySelector('#pc-cartas');
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

// Turno del pc
const turnoPc = (puntosMinimos) => {
    do {
        const carta = pedirCarta();

        // Suma los puntos del pc
        puntosPc = puntosPc + valorCarta(carta);
        marcadores[1].innerText = puntosPc;
        
        // Crea la imagen de la carta
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        // Inserta la imagen de la carta
        divCartasPc.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosPc < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        puntosPc === puntosMinimos ? alert('Nadie gana') :
        puntosMinimos > 21  ? alert('El PC gana') :
        puntosPc > 21 ? alert('Jugador 1 gana') : alert('El PC gana');
    }, 100);

}

const nuevoJuego = () => {
    deck = [];
    crearDeck();
    puntosJugador = 0;
    puntosPc = 0;
    divCartasJugador.innerHTML = '';
    divCartasPc.innerHTML = '';
    marcadores[0].innerText = 0;
    marcadores[1].innerText = 0;
}

// Eventos
btnPedir.addEventListener('click', () => {
    // Recoge la carta pedida
    const carta = pedirCarta();

    // Suma los puntos del jugador
    puntosJugador = puntosJugador + valorCarta(carta);
    marcadores[0].innerText = puntosJugador;
    
    // Crea la imagen de la carta
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    // Inserta la imagen de la carta
    divCartasJugador.append(imgCarta);

    // Comprueba si el jugador se pasa de 21
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPc(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPc(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoPc(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    nuevoJuego();
});