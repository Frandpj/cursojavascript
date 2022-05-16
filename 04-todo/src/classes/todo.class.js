export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // Genera un id unico
        this.completado = false;
        this.creado = new Date();
    }
}