
import './styles.css'

import { TodoList,Todo} from './classes' /// si no  se pone argumento en la carpeta automaticamente se busca en index.js
//import {Todo} from './classes/todo.class'

//import {TodoList} from './classes/todo-list.class'
import {crearTodo} from './js/componentes' 


/*
La diferencia importante entre ellos es que map acumula todos los resultados en una colección, mientras que 
foreach no devuelve nada. map se usa generalmente cuando se quiere transformar una colección 
de elementos con una función, mientras que foreach simplemente ejecuta una acción para cada elemento.
*/

const divTodoList = document.querySelector('.todo-list')

export const todoList = new TodoList();


todoList.todos.forEach( crearTodo)



    







//const newTodo = new Todo('apredner javascript')
//todoList.todosNuevos(newTodo)

//todoList.todos[0].imprimirTodos()
//newTodo.imprimirTodos();
console.log('tOdos',todoList.todos)


//const tarea = new Todo('')

//todoList.todosNuevos(tarea)

//localStorage.setItem('my-key', 'abc12345 ')

//sessionStorage.setItem('my-key', 'abc12345 ')

