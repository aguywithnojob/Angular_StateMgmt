import { Component,  OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showTodos } from '../todo/state/todo.selector';
import { ToDo } from '../todo/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public showDashboard : any = {};
  constructor(private _store: Store) { 
    this._store.pipe(select(showTodos)).subscribe((todos)=>{
      this.showDashboard = {
        todoCounts:todos.length,
        completedTodos:todos.filter((todo:ToDo) => todo.completed).length,
        pendingTodos:todos.filter((todo:ToDo) => !todo.completed).length
      }
    })
  }

  ngOnInit(): void {
  }

}
