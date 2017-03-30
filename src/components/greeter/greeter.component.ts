import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { GreeterService } from '../../services';

/**
 * Moment component.
 */
@Component({
  selector: 'greater',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  public greetingString: string;

  @Input() public name: string;

  /**
   * Component constructor with injected dependencies.
   * @param greeterService
   */
  public constructor(private greeterService: GreeterService) {}

  /**
   * Component init event handler.
   */
  public  ngOnInit(): void {
    this.greetingString = this.greeterService.sayHello(this.name);
  }
}
