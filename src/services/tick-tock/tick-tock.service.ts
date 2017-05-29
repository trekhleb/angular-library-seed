import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * TickTockService class.
 */
@Injectable()
export class TickTockService {

  /**
   * Extend time value with zero if required.
   * @param value
   * @returns {string}
   */
  private static formatTimeNumber(value: number): string {
    const stringValue = value.toString();
    return ('0' + stringValue).slice(-2);
  }

  /**
   * Get current time string.
   * @returns {string}
   */
  private static getNowString(): string {
    const date = new Date();

    const hours = TickTockService.formatTimeNumber(date.getHours());
    const minutes = TickTockService.formatTimeNumber(date.getMinutes());
    const seconds = TickTockService.formatTimeNumber(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
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
