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
  orderOptions: Object[];
  selectedOrder: Object;

  constructor(private todoDataService: TodoDataService) { 
    this.orderOptions = [{
      name: 'Free',
      value: ''
    }, {
      name: 'Title',
      value: 'title'
    }, {
      name: 'Complete',
      value: 'complete'
    }];

    this.selectedOrder = this.orderOptions[0];
  }

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
    this.todoDataService.updateTodoById(todo._id, todo)
                    .subscribe(
                      serverTodo => todo = serverTodo,
                      error => this.errorMessage = <any>error
                    );
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

  dropTodo() {
    this.selectedOrder = this.orderOptions[0];
  }

}
