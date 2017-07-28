import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../../todo-data.service';
import { Todo } from '../../todo';
import { TodoPipe } from '../todo.pipe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo: Todo = new Todo();
  todos: Todo[];
  errorMessage: String;
  searchWord: string;
  allState: boolean;

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoDataService.getTodos()
                        .subscribe(
                          todos => this.todos = todos,
                          error => this.errorMessage = <any>error);
  }

  addTodo() {
    if (!this.newTodo.title) { return; }
    this.todoDataService.addTodo(this.newTodo)
                     .subscribe(
                       todo  => this.todos.push(todo),
                       error =>  this.errorMessage = <any>error);

    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    todo.complete = !todo.complete;
  }

  changeAllState(state: boolean) {
    this.todos.map(todo => todo.complete = !this.allState);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo._id)
                        .subscribe(
                          todos  => this.todos = todos,
                          error =>  this.errorMessage = <any>error
                        );
  }

}
