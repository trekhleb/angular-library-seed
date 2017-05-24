import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * TickTockService class.
 */
@Injectable()
export class TickTockService {

  // Set up timer frequency.
  private readonly TIMEOUT: number = 1000;

  /**
   * Get current time observable.
   */
  public getTick(): Observable<string> {
    return Observable
      .timer(0, this.TIMEOUT)
      .map(
        (tick) => '' + new Date().getSeconds()
      );
  }
}
