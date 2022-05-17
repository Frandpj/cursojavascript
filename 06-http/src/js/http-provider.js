const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// Con el async la función retorna una promesa
const obtenerChiste = async() => {
    try {

        const resp = await fetch(jokeUrl);
    
        if (!resp.ok) throw 'No se pudo realizar la petición';

        const {icon_url, id, value} = await resp.json();
    
        return {icon_url, id, value};

    } catch (err) {

        throw err;

    }
}


export {
    obtenerChiste
}
























// La funcino fetch() es una promesa que se resuelve o se rechaza
// fetch(jokeUrl).then(function(resp) {
//     La funcion json() convierte la respuesta en un objeto JSON 
//     resp.json().then(function({id, value}) {
//         console.log(id);
//         console.log(value);
//     });
// });

/**
 * Esto es lo mismo que arriba, solo que en dos pasos
 * El porque se hace en dos pasos
 * La función fetch() retorna una promesa
 * y al hacerle un then a esa promesa se resuelve
 * al haberlo hecho con la función json() esa función retorna una promesa
 * que a su vez se puede volver a resolver con un then y se imprime en consola
 * TODO SE HACE EN UNA LINEA PORQUE SON RETURN
 */

// fetch(jokeUrl)
// .then(resp => resp.json())
// .then(({id, value}) => {
//     console.log(id);
//     console.log(value);
// });