import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OrderDetailsComponent } from '../components/order/order-details.component';

console.log('`Cart Summary` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    OrderDetailsComponent
  ],
  exports: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OrderDetailsModule {
}
