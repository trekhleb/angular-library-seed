import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { setInterval } from "timers";

const moment = require('moment');

/**
 * Moment component.
 */
@Component({
  selector: 'moment',
  templateUrl: './moment.component.html',
  styles: [
    require('./moment.component.scss').toString()
  ]
})
export class MomentComponent implements OnInit {
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
