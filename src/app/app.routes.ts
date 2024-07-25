// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'task/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
