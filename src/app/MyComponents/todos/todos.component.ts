import { Component } from '@angular/core';
import {Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title = 'Welcome to Todo list';
  todos : Todo[];
  localItem ! : string;
  constructor(){

    this.localItem = localStorage.getItem("todos")

    if(this.localItem == null)
        this.todos = []
    else
      this.todos = JSON.parse(this.localItem)
   /*this.todos = [
    {
      sno : 1,
      title : "schedule appointment with doctor",
      desc:" Take appointment with NHS doctor",
      active: true
    },
    {
      sno : 2,
      title : "schedule appointment with school",
      desc:" Take appointment with Crossacre school",
      active: true
    }


    ] */



  }

  deleteTodoFn(todo : Todo){

    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo : Todo){

    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  toggleTodo(todo : Todo){

    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }


}
