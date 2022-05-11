const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('AND');
console.log(true && true);
console.log(true && !false);

console.log('=============');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

regresaTrue() && regresaFalse()
regresaFalse() && regresaTrue()

console.warn('OR');
console.log(true || false);
console.log(regresaTrue() || regresaFalse());


console.warn('ASIGNACIONES');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// Si todo es true, coge el último parámetro, si no, coge falso
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;

// Coge el primer valor a true
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if(regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hacer algo');
}
else {
    console.log('Hacer otra cosa');
}