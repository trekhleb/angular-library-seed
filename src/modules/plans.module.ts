import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class PlansModule {
}
