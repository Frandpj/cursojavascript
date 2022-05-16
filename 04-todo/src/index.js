// Impota otro archivo js
import './styles.css';
import { Todo, TodoList } from "./classes/index.js";

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un juego de mesa');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);