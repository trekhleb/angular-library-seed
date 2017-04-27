import { Component, OnInit } from '@angular/core';

import { TickTockService } from '../../services/tick-tock/tick-tock.service';

@Component({
  selector: 'tick-tock',
  styleUrls: ['./tick-tock.component.scss'],
  templateUrl: './tick-tock.component.html',
})
export class TickTockComponent implements OnInit {
  public header: string;

  /**
   * Component constructor with injected dependencies.
   * @param tickTockService
   */
  public constructor(private tickTockService: TickTockService) {}

  /**
   * Implements onInit event handler.
   */
  public ngOnInit(): void {
    this.header = this.tickTockService.getTick('testFormat');
  }
}
