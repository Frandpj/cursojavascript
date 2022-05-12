// Función anónima autoinvocable para controlar que nada se pueda llamar desde el navegador
const miModulo = (() => {
    // Uso estricto, restringe cosas que no le gustan a js
    'use  strict'
    
    /**
     * 2C = Two of Clubs
     * 2D = Two of Diamons
     * 2H = Two of Hearts
     * 2S = Two of Spades
     */
    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K']
    
    let puntosJugadores = [];
    
    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');
    
    const divCartasJugadores = document.querySelectorAll('.divCartas')
    marcadores = document.querySelectorAll('small');
    
    // Inicializa el juego
    const inicializarJuego = (numeroJugadores = 2) => {
        console.clear();
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        }

        marcadores.forEach(element => element.innerText = 0);
        divCartasJugadores.forEach(element => element.innerText = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Crear una nueva baraja
    const crearDeck = () => {
        deck = [];

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

        return _.shuffle(deck);
    }
        
    // Devuelve una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
    
        return deck.pop();
    }
    
    // Devuelve el valor de la carta que se ha pedido
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor))  ? 
        (valor === 'A') ? 11 : 10
        : valor * 1;
    }

    // Turno: 0 = primer jugador y el último es el pc
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        marcadores[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    // Crea la carta
    const crearCarta = (carta, turno) => {
        // Crea la imagen de la carta
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        // Inserta la imagen de la carta
        divCartasJugadores[turno].append(imgCarta);
    }
    
    const determinarGanador = () => {
        
        // Desectructura la variable puntosJugador
        const [puntosMinimos, puntosPc] = puntosJugadores;

        setTimeout(() => {
            puntosPc === puntosMinimos ? alert('Nadie gana') :
            puntosMinimos > 21  ? alert('El PC gana') :
            puntosPc > 21 ? alert('Jugador 1 gana') : alert('El PC gana');
        }, 100);
    }
    
    // Turno del pc
    const turnoPc = (puntosMinimos) => {
        let puntosPc = 0;
        do {
            const carta = pedirCarta();
    
            puntosPc = acumularPuntos(carta, puntosJugadores.length - 1);

            crearCarta(carta, puntosJugadores.length - 1)
    
        } while ((puntosPc < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    }
    
    // Eventos
    btnPedir.addEventListener('click', () => {
        // Recoge la carta pedida
        const carta = pedirCarta();
    
        const puntosJugador = acumularPuntos(carta, 0);
        
        crearCarta(carta, 0);
    
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
        turnoPc(puntosJugadores[0]);
    });
    
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    // Hace público
    return {
        nuevoJuego: inicializarJuego
    }
})();