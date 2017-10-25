import { NgModule, ApplicationRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent, CartTotalComponent } from '../components/cart';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
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
