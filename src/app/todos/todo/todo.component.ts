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
  todo: Todo;
  id: number;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.todo = this.todoDataService.getTodoById(this.id);
  }

}

