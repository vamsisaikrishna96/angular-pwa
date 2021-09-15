import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './modules/posts/posts/posts.component';
import { PostsModule } from './modules/posts/posts/posts.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
