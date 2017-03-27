import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as moment from 'moment';

/**
 * Moment component.
 */
@Component({
  selector: 'now-moment',
  templateUrl: './now_moment.component.html',
  styleUrls: ['./now_moment.component.scss']
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
   */
  @Input() public nowFormat: string = 'dddd, MMMM Do YYYY, h:mm:ss a';

  /**
   * Component init event handler.
   */
  public  ngOnInit(): void {
    this.setNow();
  }

  /**
   * Set now time.
   */
  protected setNow() {
    this.now = moment().format(this.nowFormat);
  }
}
