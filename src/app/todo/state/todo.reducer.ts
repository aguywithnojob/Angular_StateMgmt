import { createReducer, on } from "@ngrx/store";
import { initialTodoState } from "./todo.state";
import { AddToDoState, ShowTodosState, RemoveToDoState, UpdateToDoState } from "./todo.action";
import { ToDoList } from "../todo.model";

export const AddToDoReducer = createReducer(
    initialTodoState,
    on(AddToDoState, (state:ToDoList, {newTodo} ) => {
        let new_todo = {
            id: state.todos.length + 1,
            title: newTodo.title,
            completed: newTodo.completed
        }

        return {...state, todos: [...state.todos, new_todo]}
    }),
    on(ShowTodosState, (state:ToDoList) => {
        return state
    }),
    on(RemoveToDoState, (state:ToDoList, {id})=>{
        let new_state = state.todos.filter(todo => todo.id !== id)
        return {...state, todos: new_state}
    }),
    on(UpdateToDoState, (state:ToDoList, {id, updatedTodo})=>{
        const updatedTodos = state.todos.map(todo =>
            todo.id === id
              ? { ...todo, ...updatedTodo }
              : todo
          );
      
          return {
            ...state,
            todos: updatedTodos
          };
    })
)
