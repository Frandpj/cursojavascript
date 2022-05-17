const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloadPreset = 'ekbweoqu';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dzfb0rkwh/upload';

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

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    // Los dos puntos renombra el objeto
    const {data:usuarios} = await resp.json();
    
    return usuarios;
}

// ArchivoSubir :: File
const subirImagen = async(archivoSubir) => {
    // Crea el resultado de un formulario html
    const formData = new FormData();
    formData.append('upload_preset', cloadPreset);
    formData.append('file', archivoSubir);

    try {
        
        // Esta es la petición POST para subir una imagen
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        
        // Si la respuesta es correcta
        if (resp.ok) {
            const cloudRest = await resp.json();
            return cloudRest.secure_url;
        }
        else {
            throw await resp.json();
        }

    } catch (error) {

        throw error;
        
    }
}


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
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