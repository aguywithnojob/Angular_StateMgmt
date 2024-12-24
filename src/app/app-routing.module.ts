import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, pathMatch: 'full'},
  {path:'add', component: TodoAddComponent, pathMatch: 'full'},
  {path:'edit/:id', component: TodoAddComponent, pathMatch: 'full'},
  {path:'list', component: TodoListComponent, pathMatch: 'full'},
  {path:'dash/stats', component:DashboardStatsComponent, pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent, pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
