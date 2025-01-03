import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDoList, ToDo } from '../todo.model';


export const showTodos = createSelector(
    createFeatureSelector('AddToDoReducer'),
    (state: ToDoList) => state.todos
)

export const countOfTodos = createSelector(
    createFeatureSelector('AddToDoReducer'),
    (state: ToDoList) => state.todos.length
)