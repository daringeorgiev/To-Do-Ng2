import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
  name: 'todoSearch'
})
export class TodoPipe implements PipeTransform {

  transform(allTodos: Todo [], searchWord?: any): any {
    if (!searchWord) {
      return allTodos;
    };

    return allTodos.filter(todo => {
      return todo.title.includes(searchWord) || todo.text.includes(searchWord);
    });
  }
}
