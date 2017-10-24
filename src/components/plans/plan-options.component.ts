import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../../models/catalog.model';

@Component({
  selector: 'plan-options',
  templateUrl: './plan-options.component.html',
  styleUrls: ['./plan-options.component.scss']
})
export class PlanOptionsComponent {
  @Input() public plans: Plan[];
  @Output() public selectionEvent = new EventEmitter();

  public selectedPlan(plan: Plan): void {
      this.selectionEvent.emit(plan);
  }
}
