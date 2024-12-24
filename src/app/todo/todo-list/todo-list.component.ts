import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo,ToDoList } from '../todo.model';
import { select, Store } from '@ngrx/store';
import { showTodos } from '../state/todo.selector';
import { Observable } from 'rxjs';
import { UpdateToDoState } from '../state/todo.action';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // public toDoList: ToDo[] = [];
  public toDoList$: Observable<ToDo[]>;
  constructor(private _TodoService:TodoService, private _store: Store) { 
    // this._store.pipe(select(showTodos)).subscribe((todos) => {
    //   this.toDoList = todos;
    // });
    this.toDoList$ = this._store.pipe(select(showTodos))
  }

  ngOnInit(): void {
  }
  public toggleCompleted(todo: ToDo): void {
    // call update Reducer to update the todo
    this._store.dispatch(UpdateToDoState({id:todo.id, updatedTodo:{title:todo.title, completed:!todo.completed}}));
  }
}
