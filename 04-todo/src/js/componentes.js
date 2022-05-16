 
 import { Todo } from '../classes/index.js';
 import { todoList } from '../index.js';

 // Referencias al html
 const divTodoList = document.querySelector('.todo-list');
 const txtInput = document.querySelector('.new-todo');
 const btnBorrar = document.querySelector('.clear-completed');
 const ulFiltros = document.querySelector('.filters');
 const anchorFiltros = document.querySelectorAll('.filtro');

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

divTodoList.addEventListener('click', (event) => {
    // Comprueba que se hizo click sobre el elemento y devuelve el nombre del elemento
    const nombreElemento = event.target.localName; // input, label, button
    // Comprueba que se hizo click sobre el elemento y devuelve el elemento padre
    const todoElemento = event.target.parentElement.parentElement; // li
    // Comprueba que se hizo click sobre el elemento y devuelve el id del elemento
    const todoId = todoElemento.getAttribute('data-id');

    // Comprueba que se hizo click sobre el input
    if (nombreElemento.includes('input')) {
        // Marca el todo como completado
        todoList.marcarCompletado(todoId);
        // Cambia el estado del elemento
        todoElemento.classList.toggle('completed');
    }
    // Se borra el todo
    else if (nombreElemento.includes('button')) {
        // Elimina el todo de la lista
        todoList.eliminarTodo(todoId);
        // Elimina el elemento html de la lista
        divTodoList.removeChild(todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {
    // Elimina los todos completados del array
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        // Recupera el elemento hijo de divTodoList que es un li (todos los que haya)
        const elemento = divTodoList.children[i];

        // Comprueba si el elemento contiene la clase completed
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento)
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    // Comprueba que se hizo click sobre el elemento y devuelve el nombre del elemento
    const filtro = event.target.text;

    // Comprueba el filtro y muestra los todos correspondientes
    if (!filtro) {
        return;
    }

    // Recorre los elementos del html y le quita la clase selected para que no sean los activos
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    // Agrega la clase selected al elemento que se hizo click
    event.target.classList.add('selected');

    // Recorre los hijos del elemento divTodoList que son los li
    for (const elemento of divTodoList.children) {
        // Borra la clase hidden de los elementos
        elemento.classList.remove('hidden');
        // Comprueba si el elemento contiene la clase completed
        const completado = elemento.classList.contains('completed');

        // Comprueba si el texto que trae el filtro es "Pendientes" o "Completados"
        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});