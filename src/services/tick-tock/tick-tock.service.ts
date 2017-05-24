import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * TickTockService class.
 */
@Injectable()
export class TickTockService {
  /**
   * Get current time string.
   * @returns {string}
   */
  private static getNowString(): string {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /**
   * Set up timer frequency.
   * @type {number}
   */
  private readonly TIMEOUT: number = 1000;

  /**
   * Get current time observable.
   * @returns Observable<string>
   */
  public getTick(): Observable<string> {
    return Observable
      .timer(0, this.TIMEOUT)
      .map((tick) => TickTockService.getNowString());
  }
}
