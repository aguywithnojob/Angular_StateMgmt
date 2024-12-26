import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo,ToDoList } from '../todo.model';
import { select, Store } from '@ngrx/store';
import { showTodos, countOfTodos } from '../state/todo.selector';
import { Observable } from 'rxjs';
import {  UpdateToDoState } from '../state/todo.action';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() sendUpdateTodo = new EventEmitter();

  public toDoList$: Observable<ToDo[]>;
  public _todoListCount: number = 0;
  constructor(private _TodoService:TodoService, private _store: Store) { 
    this.toDoList$ = this._store.pipe(select(showTodos))
    this._store.pipe(select(countOfTodos)).subscribe((count) => {
      this._todoListCount = count;
    })
  }

  ngOnInit(): void {
  }
  public toggleCompleted(todo: ToDo): void {
    // call update Reducer to update the todo
    this._store.dispatch(UpdateToDoState({id:todo.id, updatedTodo:{title:todo.title, completed:!todo.completed}}));
  }
  public _onUpdateClick($event: ToDo): void {
    // emit this event
    this.sendUpdateTodo.emit($event);

  }
}
