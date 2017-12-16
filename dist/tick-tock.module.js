import { NgModule } from '@angular/core';
import { TickTockComponent } from './components';
import { TickTockService } from './services';
var TickTockModule = /** @class */ (function () {
    function TickTockModule() {
    }
    TickTockModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        TickTockService,
                    ],
                    declarations: [
                        TickTockComponent,
                    ],
                    exports: [
                        TickTockComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    TickTockModule.ctorParameters = function () { return []; };
    return TickTockModule;
}());
export { TickTockModule };
//# sourceMappingURL=tick-tock.module.js.map