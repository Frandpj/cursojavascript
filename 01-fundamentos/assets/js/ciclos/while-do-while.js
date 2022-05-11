const coches = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < coches.length) {
//     console.log(coches[i]);
//     i++;
// }

console.warn('While');
while (i < coches.length) {
    if (i === 1) {
        i++
        continue;
    }
    console.log(coches[i]);
    i++;
}

console.warn('Do while');

let j = 0;

do {
    console.log(coches[j])
    j++;
} while (coches[j]);