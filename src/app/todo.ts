export class Todo {
  id: number;
  title: string = '';
  ownerId: number;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
