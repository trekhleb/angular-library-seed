import {
    Component,
    Input,
    Output,
    OnInit,
    EventEmitter
} from '@angular/core';

import { ShoppingCart, LineItem } from '../../models/shopping-cart.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../../models/catalog.model';

@Component({

    selector: 'shopping-cart',  // <home></home>
    styleUrls: ['./cart.component.scss'],
    templateUrl: './cart.component.html'
})
export class CartComponent {
    @Input() public shoppingCart: ShoppingCart;
    @Output() public checkOutEvent = new EventEmitter();
    @Output() public deleteEvent = new EventEmitter();

    public deleteItem(lineItem: LineItem) {
       this.deleteEvent.emit(lineItem);
    }

    public onCheckOut() {
        this.checkOutEvent.emit();
    }
}
