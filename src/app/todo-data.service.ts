import { Injectable, isDevMode } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Todo} from './todo';

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  private todosUrl: any;

  constructor(private http: Http) {
    if (isDevMode()){
      this.todosUrl = 'http://localhost:3000/api/todos';
    } else {
      this.todosUrl = '/api/todos';
    }
  }

  // GET /todos
  getTodos (): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // POST /todos
  addTodo (todo: Todo): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.todosUrl, todo, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // ToDo DELETE /todos/:id
  deleteTodoById(id: string): Observable<Todo[]> {
    return this.http.delete(this.todosUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // ToDo PUT /todos/:id
  updateTodoById(id: string, values: Object = {}): any {
    // Todo
  }

  // ToDo GET /todos/:id
  getTodoById(id: string): Observable<Todo> {
    return this.http.get(this.todosUrl + `/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo._id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
