import { Todo } from "../classes/index.js";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    // Metodo para agregar un nuevo todo
    nuevoTodo(todo) {
        // Agrega el todo a la lista
        this.todos.push(todo);
        // Guarda en el localStorage el array de todos
        this.guardarLocalStorage();
    }

    // Metodo para eliminar un todo
    eliminarTodo(id) {
        // Devuelve una nueva lista con todos menos el que se quiere eliminar
        // Para que se entienda, en el array solo van a entrar los ids que no se hayan mandado, en este caso el que se va a borrar
        this.todos = this.todos.filter(todo => todo.id != id);
        console.log(this.todos);
        // Guarda en el localStorage el array de todos
        this.guardarLocalStorage();
    }

    // Metodo marcar los todos como completados
    marcarCompletado(id) {
        // Busca el todo por el id
        for (let todo of this.todos) {
            // Si el id del todo es igual al id que se pasó por parámetro
            if (todo.id == id) {
                // Marca el todo como completado
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    // Metodo para borrar todos los completados
    eliminarCompletados() {
        // Devuelve una nueva lista con todos los que no estén completados
        this.todos = this.todos.filter(todo => !todo.completado);
        // Guarda en el localStorage el array de todos
        this.guardarLocalStorage();
    }

    // Metodo para guardar los todos en el localStorage
    guardarLocalStorage () {
        // Guarda en el localStorage el array de todos transformando el objeto a JSON para poder guardarlo como string
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    // Metodo para cargar los todos del localStorage
    cargarLocalStorage() {
        // Comprueba si hay algo en el localStorage
        this.todos = (localStorage.getItem('todo')) ? this.todos = JSON.parse(localStorage.getItem('todo')) : [];
        // Devuelve el array de todos transformado a objeto para poner obtener las funciones
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }

}