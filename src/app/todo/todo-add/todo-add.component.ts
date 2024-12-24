import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('todoInput') _todoInput:any = ElementRef;
  constructor(private _TodoService:TodoService) { }
  public todos : ToDo[] = [];
  ngOnInit(): void {
  }
  public addTodo(): void {
    let newTodo = {
      title: this._todoInput.nativeElement.value,
      completed: false
    }
    this._TodoService.addTodo(newTodo);
  }

}
