import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { todoRoutes } from './todos/todo.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  ...todoRoutes,
];

export const routedComponents = RouterModule.forRoot(routes);
