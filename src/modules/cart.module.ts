import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartTotalComponent } from '../components/cart';

@NgModule({
    imports: [
        CommonModule
        ],
    declarations: [
        // ADD YOUR EXPORTED SHARED MODULE COMPONENTS
        CartComponent,
        CartTotalComponent
    ],
    exports: [
        // ADD YOUR EXPORTED SHARED MODULE COMPONENTS
        CartComponent
    ]
})

export class CartModule { }
