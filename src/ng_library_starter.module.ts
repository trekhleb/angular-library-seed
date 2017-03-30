import { NgModule } from '@angular/core';

import { GreeterComponent } from './components';
import { GreeterService } from './services';

/**
 * NgLibraryStarterModule module.
 */
@NgModule({
  providers: [
    GreeterService,
  ],
  declarations: [
    GreeterComponent,
  ],
  exports: [
    GreeterComponent,
  ]
})
export class NgLibraryStarterModule {
}
