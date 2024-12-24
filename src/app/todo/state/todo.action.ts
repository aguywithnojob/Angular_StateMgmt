import { createAction, props } from "@ngrx/store";
import { ToDo, AddToDo } from "../todo.model";


export const AddToDoState = createAction(
    'Add Todo State',
    props<{ newTodo: AddToDo }>()
)

export const RemoveToDoState = createAction(
    'Remove Todo State',
    props<{ id: number }>()
)

export const ShowTodosState = createAction(
    'Show all Todos'
)

export const UpdateToDoState = createAction(
    'Update Todo State',
    props<{id:number, updatedTodo:AddToDo}>()
)