import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../todo';
import { TodoDataService } from '../../todo-data.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  errorMessage: String;

  @Input() todo: Todo;
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onChangeTodo = new EventEmitter();

  constructor(private todoDataService: TodoDataService,
              private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      this.onChangeTodo.emit();
    });
  }

  toggleTodoComplete(todo) {
    todo.complete = !todo.complete;
    this.todoDataService.updateTodoById(todo._id, todo)
                    .subscribe(
                      serverTodo => {
                        todo = serverTodo;
                        this.onChangeTodo.emit();
                      },
                      error => this.errorMessage = <any>error
                    );
  }

  removeTodo(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
}
