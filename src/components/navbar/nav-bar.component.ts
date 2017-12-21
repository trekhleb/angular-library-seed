import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ShoppingCart } from '../../models/shopping-cart.model';
import { NavLinks } from '../../models/nav-bar.model';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'nav-bar',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./nav-bar.component.scss'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  @Input() public shoppingCart: ShoppingCart;
  @Input() public links: NavLinks[];
}
