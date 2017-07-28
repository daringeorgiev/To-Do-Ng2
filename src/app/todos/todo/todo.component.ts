import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoDataService } from '../../todo-data.service';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todo: Todo = new Todo;
  updatedTodo: Todo = new Todo;
  id: string;
  errorMessage: String;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todoDataService.getTodoById(this.id)
                        .subscribe(
                          todo  => {
                            this.todo = todo;
                            this.updatedTodo = Object.assign({}, this.todo);
                          },
                          error =>  this.errorMessage = <any>error
                        );
  }

  updateTodo() {
    this.todo = this.updatedTodo;
    // this.todoDataService.updateTodoById(this.id, this.todo);
  }
}

