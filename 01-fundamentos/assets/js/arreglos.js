// const arr = new Array(10);
// const arr = []:
// console.log(arr);

let juegosMesa = ['Brass Birmingham', 'Yukon Airways', 'Root'];
console.log({juegosMesa});
console.log(juegosMesa[0]);

let arregloCosas = [
    true,
    123,
    'Fran',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    [
        'Meeple morado', 
        'Meeple negro', 
        'Meeple azul', 
        'Meeple rojo', 
        [
            'Deckbuilding',
            'Roll and write',
        ],
    ],
];

// console.log({arregloCosas});
// console.log(arregloCosas[2]);
// console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][0]);