import { Component, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../../models/catalog.model';

@Component({
  selector: 'plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanDetailsComponent {
  @Input() public plans: Plan[];
  @Input() public features: FeatureMap[];
  @Output() public selectionEvent = new EventEmitter();

  public selectedPlan(plan: Plan): void {
      this.selectionEvent.emit(plan);
  }
}
