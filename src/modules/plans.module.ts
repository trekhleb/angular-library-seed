import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PlanDetailsComponent, PlanOptionsComponent } from '../components/plans';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PlanOptionsComponent,
    PlanDetailsComponent
  ],
  exports: [
    PlanOptionsComponent,
    PlanDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PlansModule {
}
