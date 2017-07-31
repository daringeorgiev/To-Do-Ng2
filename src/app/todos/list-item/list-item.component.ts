import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../todo';
import { TodoDataService } from '../../todo-data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  errorMessage: String;

  @Input() todo: Todo;
  @Output() onRemoveTodo = new EventEmitter<Todo>();

  constructor(private todoDataService: TodoDataService) { }

  toggleTodoComplete(todo) {
    todo.complete = !todo.complete;
    this.todoDataService.updateTodoById(todo._id, todo)
                    .subscribe(
                      serverTodo => todo = serverTodo,
                      error => this.errorMessage = <any>error
                    );
  }

  removeTodo(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
}
