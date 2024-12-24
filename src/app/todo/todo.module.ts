import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [TodoAddComponent, TodoListComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }