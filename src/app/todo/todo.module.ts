import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';


@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, UpdateTodoComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }