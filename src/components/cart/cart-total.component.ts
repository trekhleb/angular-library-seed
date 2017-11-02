import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import { LineItem } from '../../models/shopping-cart.model';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'cart-total',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    styleUrls: ['./cart-total.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './cart-total.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTotalComponent implements OnChanges {
    @Input() public items: LineItem[];
    @Output() public checkOutEvent = new EventEmitter();

    public price: number = 0;

    public getTotal() {
        this.price = 0;
        this.price += _.reduce(this.items, (sum, v) => sum + Number(v.unitPrice), 0);
    }

    public ngOnChanges(lineItem: any): void {
        this.getTotal();
    }

    public checkOutClicked(): void {
        this.checkOutEvent.emit();
    }
}
