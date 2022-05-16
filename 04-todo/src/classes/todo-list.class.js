export class TodoList {

    constructor() {
        this.todos = [];
    }

    // Metodo para agregar un nuevo todo
    nuevoTodo(todo) {
        // Agrega el todo a la lista
        this.todos.push(todo)
    }

    // Metodo para eliminar un todo
    eliminarTodo(id) {

    }

    // Metodo marcar los todos como completados
    marcarCompletado(id) {
        // Busca el todo por el id
        for (let todo of this.todos) {
            // Si el id del todo es igual al id que se pasó por parámetro
            if (todo.id == id) {
                // Marca el todo como completado
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    // Metodo para borrar todos los completados
    eliminarCompletados() {

    }

}