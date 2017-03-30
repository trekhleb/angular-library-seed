import { Injectable } from '@angular/core';

/**
 * GreeterService class.
 */
@Injectable()
export class GreeterService {
  /**
   * Greeter says hello.
   * @param name
   * @returns {string}
   */
  public sayHello(name: string): string {
    return `Hello ${name}`;
  }
}
