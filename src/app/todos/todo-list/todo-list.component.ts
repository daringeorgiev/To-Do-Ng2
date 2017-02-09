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
  searchWord: string;
  allState: boolean;

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  changeAllState(state: boolean) {
    this.todoDataService.getAllTodos()
      .map(todo => todo.complete = !this.allState);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
