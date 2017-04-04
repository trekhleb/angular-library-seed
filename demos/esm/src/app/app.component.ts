import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `Heya from {{ name }}`
})
export class AppComponent {
  public name = 'Angular';
}
