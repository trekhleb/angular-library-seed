import { Observable } from 'rxjs/Rx';
/**
 * TickTockService class.
 */
export declare class TickTockService {
    /**
     * Extend time value with zero if required.
     * @param value
     * @returns {string}
     */
    private static formatTimeNumber(value);
    /**
     * Get current time string.
     * @returns {string}
     */
    private static getNowString();
    /**
     * Set up timer frequency.
     * @type {number}
     */
    private readonly TIMEOUT;
    /**
     * Get current time observable.
     * @returns Observable<string>
     */
    getTick(): Observable<string>;
}
