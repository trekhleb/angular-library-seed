import { Injectable } from '@angular/core';

import * as moment from 'moment';

/**
 * NowService class.
 */
@Injectable()
export class NowService {
  /**
   * Return current date in specified format.
   * @param nowFormat
   * @returns {string}
   */
  public getNow(nowFormat: string): string {
    return moment().format(nowFormat);
  }
}
