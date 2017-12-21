/**
 * Address information
 * part of the Billing data model
 */
export interface Address {
    addressType?: string;    //
    street1?: string;       // Company Address Line 1
    street2?: string;       // Address Line 2
    city: string;           // City
    state: string;          // State
    zip: string;            // Postal Code
}
