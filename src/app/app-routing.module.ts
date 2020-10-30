import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [
  {path: 'postslist', component: PostsListComponent},
  {path: 'post', component: PostComponent},
  {path: 'form', component: FormComponent},
  {path: '**', redirectTo: 'form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
