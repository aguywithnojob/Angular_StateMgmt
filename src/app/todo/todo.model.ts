export interface ToDo {
    id : number;
    title : string;
    completed : boolean;
}

export interface AddToDo {
    title : string;
    completed : boolean;
}

export interface ToDoList {
    todos : ToDo[];
}
