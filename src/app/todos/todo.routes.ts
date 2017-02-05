import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const todoRoutes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:id', component: TodoComponent },
];