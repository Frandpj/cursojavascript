export class Todo {

    // Crea una instancia de Todo
    static fromJson({id, tarea, completado, creado}) {
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }
    
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // Genera un id unico
        this.completado = false;
        this.creado = new Date();
    }

    imprimir() {
        console.log(`Tarea: ${this.tarea}`);
    }
    
}