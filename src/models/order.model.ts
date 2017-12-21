import { ShoppingCart } from './shopping-cart.model';
import { Address } from './address.model';

export interface Order {
    id?: string;
    orderDate?: string;
    orderValue?: number;
    status?: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    shoppingCart?: ShoppingCart;
}
