export interface ShoppingCart {
    id?: string;            // cart id
    lineItems?: LineItem[]; // cart line items
}

/**
 * cart line item details
 */
export interface LineItem {
    id?: string;                        // line item id
    productName: string;                // product name
    productId: string;                  // product id
    description?: string;                // product description
    unitPrice?: string;                 // product variant unit price
}
