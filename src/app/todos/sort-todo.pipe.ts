import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
  name: 'sortTodo',
  // pure: false
})
export class SortTodoPipe implements PipeTransform {

  static _sortByProperty(array: any[], propertyName: string) {
    return array.sort(function (a, b) {
      let itemA = a[propertyName];
      let itemB = b[propertyName];

      if (typeof a[propertyName] === 'string') {
        // ignore upper and lowercase
        itemA = itemA.toUpperCase();
        itemB = itemB.toUpperCase();
      }

      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }

      // property names must be equal
      return 0;
    });
  }

  transform(todos: Todo[], args?: any): any {
    if (todos) {
      if (args) {
        return SortTodoPipe._sortByProperty(todos, args);
      } else {
        return todos;
      }
    }
  }

}
