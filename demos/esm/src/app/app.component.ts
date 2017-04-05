import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="greeter">Heya from {{ name }}</div>
  `
})
export class AppComponent {
  public name = 'Angular';
}
