
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pwa';
  constructor() {}

  ngOnInit(): void {
  
    console.log('hey i am working');
  }
}
