import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('todoInput') _todoInput:any = ElementRef;
  @ViewChild('todoUpdateInput') _todoUpdateInput:any = ElementRef;
  constructor(private _TodoService:TodoService, private _store:Store) {
   }
  public todos : ToDo[] = [];
  public shouldUpdate: boolean = false;
  public _todo: any ;
  ngOnInit(): void {
  }
  public addTodo(): void {
    if (this._todoInput.nativeElement.value === '') {
      // mark focus input and color red
      this._todoInput.nativeElement.style.border = '1px solid red';
      this._todoInput.nativeElement.focus();
      return;
    }
    let newTodo = {
      title: this._todoInput.nativeElement.value,
      completed: false
    }
    this._TodoService.addTodo(newTodo);
    // reset form
    this._todoInput.nativeElement.value = '';
  }
  
  public UpdateTodoRecord($event: any): void {
    // call update Reducer to update the todo
    this.shouldUpdate = true;
    this._todo = {...$event};
  }
  public toggleCompleted(todo: ToDo) {
    todo.completed = !todo.completed;
  }
  public updateTodo(todo: ToDo){
    todo.title = this._todoUpdateInput.nativeElement.value;
    this._TodoService.updateTodoRecord(todo);
  }
  public showUpdator(flag: boolean){
    this.shouldUpdate = flag;
  }

}
