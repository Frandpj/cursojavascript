// El provider es el que se encarga de hacer la petición a la API
const urlCRUD = 'https://reqres.in/api/users';

// Esta es la petición GET para obtener un usuario
const getUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;
}

// Esta es la petición POST para crear un usuario
const crearUsuario = async(usuario) => {
    // Esta es la petición POST para crear un usuario
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

// Esta es la petición PUT para actualizar un usuario para actualizarlo
const actualizarUsuario = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const borrarUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado' : 'No se pudo borrar';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}