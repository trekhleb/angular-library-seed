import { NgModule } from '@angular/core';

import { TickTockComponent } from './components';
import { TickTockService } from './services';

/**
 * NgLibraryStarterModule module.
 */
@NgModule({
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
  ],
  exports: [
    TickTockComponent,
  ]
})
export class NgLibraryStarterModule {
}
