import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values', () => {
    const todo = new Todo ({
      id: 1,
      title: 'Test todo',
      ownerId: 123,
      complete: false
    });

    expect(todo.id).toEqual(1);
    expect(todo.title).toEqual('Test todo');
    expect(todo.ownerId).toEqual(123);
    expect(todo.complete).toEqual(false);
  });
});
