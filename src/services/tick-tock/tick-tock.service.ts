import { Injectable } from '@angular/core';

/**
 * TickTockService class.
 */
@Injectable()
export class TickTockService {

  /**
   * Get current time.
   * @param timeFormat
   * @returns {string}
   */
  public getTick(timeFormat: string): string {
    return 'Time';
  }
}
