export class Todo {
  id: number;
  title: string = '';
  text: string = '';
  ownerId: number;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
