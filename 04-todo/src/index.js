// Impota otro archivo js
import './styles.css';
import { Todo, TodoList } from "./classes/index.js";
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// Recorre la lista de todos y los agrega a la lista
todoList.todos.forEach(todo => { crearTodoHtml(todo) });