export class Todo {
  id: number;
  _id: string;
  title: string = '';
  description: string = '';
  ownerId: number;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
