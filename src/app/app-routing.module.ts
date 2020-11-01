import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'postslist', component: PostsListComponent},
  {path: 'form', component: FormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'postslist'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
