import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { TickTockService } from '../../services';

/**
 * Moment component.
 */
@Component({
  selector: 'tick-tock',
  templateUrl: './tick-tock.component.html',
  styleUrls: ['./tick-tock.component.css']
})
export class TickTockComponent implements OnInit {
  public timeString: string;

  @Input() public timeFormat: string;

  /**
   * Component constructor with injected dependencies.
   * @param tickTockService
   */
  public constructor(private tickTockService: TickTockService) {}

  /**
   * Component init event handler.
   */
  public  ngOnInit(): void {
    this.timeString = this.tickTockService.getTick(this.timeFormat);
  }
}
