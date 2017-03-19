import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { setInterval } from 'timers';

import * as moment from 'moment';

/**
 * Moment component.
 */
@Component({
  selector: 'now-moment',
  templateUrl: 'now_moment.component.html',
  styles: [
    require('./now_moment.component.scss').toString()
  ]
})
export class NowMomentComponent implements OnInit {
  /**
   * The "now" string holder.
   */
  public now: string;

  /**
   * Date format.
   *
   * @see https://momentjs.com/docs/#/displaying/format/
   * @type {string}
   */
  @Input public nowFormat: string = 'dddd, MMMM Do YYYY, h:mm:ss a';

  /**
   * Data update frequency in ms.
   *
   * @type {number}
   */
  @Input public nowInterval: number = 1000;

  /**
   * Component init event handler.
   */
  protected  ngOnInit(): void {
    setInterval(this.setNow, this.nowInterval);
  }

  /**
   * Set now time.
   */
  protected setNow() {
    this.now = moment().format(this.nowFormat);
  }
}
