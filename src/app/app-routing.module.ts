import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }, {path: '', pathMatch: 'full', redirectTo: 'todos'}];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
