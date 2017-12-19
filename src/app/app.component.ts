import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styles : [`
    h1 {
    color:blue;
     }

    h2 {
      color:red;
    }
  `],
})
export class AppComponent {
  title = 'app';
  name = '';
}
