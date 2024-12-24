import { Injectable } from '@angular/core';
import { AddToDo, ToDo } from './todo.model';
import { select, Store } from '@ngrx/store';
import { AddToDoState } from './state/todo.action';
import { showTodos } from './state/todo.selector';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: ToDo[] = [];

  constructor(private _store: Store) {}

  // Get the current list of todos
  // getTodoList(): ToDo[] {
  //   this._store.pipe(select(showTodos)).subscribe((todos) => {
  //     this._todos = todos;
  //   });
  //   return this._todos
  // }

  // Add a new todo to the list
  addTodo(newTodo: AddToDo) {
    // instead call the dispacth method
    this._store.dispatch(AddToDoState({newTodo}));
  }
}
