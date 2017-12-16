import { Component } from '@angular/core';
import { TickTockService } from '../../services';
var TickTockComponent = /** @class */ (function () {
    /**
     * Component constructor with injected dependencies.
     * @param tickTockService
     */
    function TickTockComponent(tickTockService) {
        this.tickTockService = tickTockService;
    }
    /**
     * Implements onInit event handler.
     */
    TickTockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickTockService.getTick().subscribe(function (timeString) { return _this.currentTime = timeString; });
    };
    TickTockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tick-tock',
                    styles: ["\n    @import url(\"https://fonts.googleapis.com/css?family=Roboto:100\");.tick-tock-time{font-size:2em;font-family:'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif}\n  "],
                    template: "\n    <div class=\"tick-tock-time\">\n      {{ currentTime }}\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    TickTockComponent.ctorParameters = function () { return [
        { type: TickTockService, },
    ]; };
    return TickTockComponent;
}());
export { TickTockComponent };
//# sourceMappingURL=tick-tock.component.js.map