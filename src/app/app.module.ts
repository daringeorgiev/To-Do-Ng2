import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { routedComponents } from './app.routes';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { TodoPipe } from './todos/todo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TodoComponent,
    TodoListComponent,
    TodoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routedComponents
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
