import * as CRUD from "./js/crud-provider";

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'Fran',
    job: 'Desarrollador'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Pepe',
    job: 'En paro'
}).then(console.log);

CRUD.borrarUsuario(1)
.then(console.log);