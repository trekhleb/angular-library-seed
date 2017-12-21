import { Address } from './address.model';

/**
 * User detail data model
 */
export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    notification?: string;
    rating?: number;
    sendCatalog?: boolean;
    addresses?: Address[];
    orderId?: string;
    cartId?: string;
    UUID?: string;
    expiry?: Date;
}
