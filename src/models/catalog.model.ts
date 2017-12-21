/**
 * Sample Online Subscription Plans
 */
export interface Plan {
    id: string;
    name: string;
    type: string;
    description: string;
    offer: string;
    pricing: string;
    billing: string;
    features: Feature[];
}

export interface Feature {
    id: string;
    description: string;
    available: number;
    value: string;
}

export interface FeatureMap {
    id?: string;
    description?: string;
    availability?: FeatureAvailability[];
}

export interface FeatureAvailability {
    planId: string;
    availability: number;
}
