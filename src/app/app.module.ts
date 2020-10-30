import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormComponent } from './components/form/form.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    FormComponent,
    PostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
