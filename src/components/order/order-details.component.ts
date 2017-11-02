import {
    Component,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    ShoppingCart,
    LineItem,
    User,
    Plan,
    Feature,
    FeatureMap,
    FeatureAvailability
} from '../../models';
import * as _ from 'lodash';

@Component({
    selector: 'order-details',
    styleUrls: ['./order-details.component.scss'],
    templateUrl: './order-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent {

    @Input() public shoppingCart: ShoppingCart;
    @Input() public user: User;
    @Input() public total: number;
    @Input() public today: number;

}
