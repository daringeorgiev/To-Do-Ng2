import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../../todo-data.service';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

}

