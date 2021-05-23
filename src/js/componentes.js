

import { Todo} from '../classes'
import { todoList} from '../index'

//REFERENCIAS EN HTML

const divTodoList = document.querySelector('.todo-list')
const txtImput  = document.querySelector('.new-todo')
const clearComplete  = document.querySelector('.clear-completed')
const ulFilter  = document.querySelector('.filters')
const anchorFilter  = document.querySelectorAll('.filtro')
const buttonAll = document.querySelector('.toggle-all')




export const crearTodo  = (todo) =>{

    const htmlTodo = `
    <li class="${ (todo.completado)? 'completed': '' }" data-id=${todo.id}>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li> ` // este es solo el texto que se utiliza el


    const div = document.createElement('div');

    div.innerHTML = htmlTodo;


    divTodoList.append(div.firstElementChild);

    (localStorage.getItem('list'))?divTodoList.classList.remove('hidden'): divTodoList.classList.add('hidden');


    //return div;


}


txtImput.addEventListener('keyup', (event)=>{

    if (event.keyCode === 13 && txtImput.value.length >0){
        
        const newTodo = new Todo(txtImput.value)
        todoList.todosNuevos(newTodo);
        
        crearTodo(newTodo)

        txtImput.value = '';
    }
    




})

divTodoList.addEventListener('click',(event)=>{

    
    const nombreElemento = event.target.localName; // puede ser un labe, un imput , un button, todo elemento que este adentro de divTodoList
    
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcarComplete(todoId);
        todoElement.classList.toggle('completed')
     
        
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodos(todoId);
        divTodoList.removeChild(todoElement)
        


    }


})

clearComplete.addEventListener('click', ()=>{


    todoList.eliminarComplete();

    for (let i =divTodoList.children.length -1 ; i >= 0 ; i--){

        const element = divTodoList.children[i];
        if (element.classList.contains('completed')){
            divTodoList.removeChild(element);



        }

    }

})

ulFilter.addEventListener('click',(event) => {


    //console.log(event.target.text)

    const filtro = event.target.text;
    if (!filtro) return ;
    anchorFilter.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    console.log(event.target)


    for(const element of divTodoList.children){

        element.classList.remove('hidden')
        const completed = element.classList.contains('completed')


        switch(filtro){

            case 'Pendientes':
                if (completed) {

                    element.classList.add('hidden');
                    
                }
                break;
            case 'Completados':
                if (!completed) {
    
                    element.classList.add('hidden')
                    
                    }
                break;
        }

        

        

    }






})
buttonAll.addEventListener('click',()=>{


    
    
    if (divTodoList.classList.contains('hidden')){
        divTodoList.classList.remove('hidden');
        localStorage.setItem('list','hidden')


    
        
        

    }else {divTodoList.classList.add('hidden');
    localStorage.removeItem('list');
    
    

    }
    
})


