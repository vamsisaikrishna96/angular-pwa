import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, HttpClientModule, FlexLayoutModule],
  exports: [PostsComponent],
})
export class PostsModule {}
