


import {Todo} from './todo.class'

export class TodoList {


    constructor() {

        //this.todos =[];
        this.cargarLocalStorage();


    }

    

    todosNuevos(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage()
        

    }

    eliminarTodos(id) {

        this.todos=this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage()

      
    }

    marcarComplete(id) {

        for (const todo of this.todos) {
            
            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage()
               
                break;

            }
        }


    }

    eliminarComplete(){


        this.todos=this.todos.filter(todo => !todo.completado );
        this.guardarLocalStorage()

        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos)); // le indico a json.stringify que transforme el aray de 'todos' en un arhivo JSON
        


    }




    cargarLocalStorage(){



        (localStorage.getItem('todo') )
                    ? this.todos = JSON.parse(localStorage.getItem('todo'))
                    :this.todos = [];

                this.todos = this.todos.map(Todo.fromJson) // si estoy recibiendo un argumento no es necesarioo general la funcion 

        //if (localStorage.getItem('todo')){

           // this.todos = JSON.parse(localStorage.getItem('todo')); // le indico te trasnforme el archivo tipo JSON en un objeto
           // console.log(this.todos);
            //console.log(typeof( this.todos));


        //}else{
         //   this.todos = [];
        


    }


}