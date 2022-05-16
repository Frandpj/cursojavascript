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
        // Devuelve una nueva lista con todos menos el que se quiere eliminar
        // Para que se entienda, en el array solo van a entrar los ids que no se hayan mandado, en este caso el que se va a borrar
        this.todos = this.todos.filter(todo => todo.id != id);
        console.log(this.todos);
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
        // Devuelve una nueva lista con todos los que no estén completados
        this.todos = this.todos.filter(todo => !todo.completado);
    }

}