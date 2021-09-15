import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any = undefined;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any) => {
        this.posts = [];
        result.map((resultDetail: any) => this.posts.push(resultDetail.title));
        
      });
  }
}
