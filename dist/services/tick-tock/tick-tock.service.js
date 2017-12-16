import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
/**
 * TickTockService class.
 */
var TickTockService = /** @class */ (function () {
    function TickTockService() {
        /**
         * Set up timer frequency.
         * @type {number}
         */
        this.TIMEOUT = 1000;
    }
    /**
     * Extend time value with zero if required.
     * @param value
     * @returns {string}
     */
    TickTockService.formatTimeNumber = function (value) {
        var stringValue = value.toString();
        return ('0' + stringValue).slice(-2);
    };
    /**
     * Get current time string.
     * @returns {string}
     */
    TickTockService.getNowString = function () {
        var date = new Date();
        var hours = TickTockService.formatTimeNumber(date.getHours());
        var minutes = TickTockService.formatTimeNumber(date.getMinutes());
        var seconds = TickTockService.formatTimeNumber(date.getSeconds());
        return hours + ":" + minutes + ":" + seconds;
    };
    /**
     * Get current time observable.
     * @returns Observable<string>
     */
    TickTockService.prototype.getTick = function () {
        return Observable
            .timer(0, this.TIMEOUT)
            .map(function (tick) { return TickTockService.getNowString(); });
    };
    TickTockService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TickTockService.ctorParameters = function () { return []; };
    return TickTockService;
}());
export { TickTockService };
//# sourceMappingURL=tick-tock.service.js.map