 
 import { Todo } from '../classes/index.js';
 import { todoList } from '../index.js';

 // Referencias al html
 const divTodoList = document.querySelector('.todo-list');
 const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
    // Crea el elemento de la lista
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // Crea un div para inserta el htmlTodo
    const div = document.createElement('div');

    // Agrega el htmlTodo al div
    div.innerHTML = htmlTodo;

    // Agrega el primer elemento hijo del div a la lista que es un li
    divTodoList.append(div.firstElementChild);

    // Retorna el div
    return div;
}

// Eventos
txtInput.addEventListener('keyup', (event) => {
    // Comprueba que se presionó la tecla enter y que el valor del input no está vacío
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        // Crea una nueva tarea
        const nuevoTodo = new Todo(txtInput.value);
        // Agrega la tarea a la lista
        todoList.nuevoTodo(nuevoTodo);
        //  Agrega el html a la lista
        crearTodoHtml(nuevoTodo);
        // Limpia el input
        txtInput.value = '';
    }
});