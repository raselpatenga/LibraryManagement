import { BookEditComponent } from './book/book-edit/book-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
const routes: Routes = [
  {path:'book-list',component:BookListComponent},
  {path:'book-create',component:BookCreateComponent},
  {path:'book-edit/:id',component:BookEditComponent},
  {path:'', redirectTo:'book-create', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
