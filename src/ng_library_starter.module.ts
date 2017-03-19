import { NgModule } from '@angular/core';

import { NowMomentComponent } from './components';

/**
 * NgLibraryStarterModule module.
 */
@NgModule({
  // The view classes that belong to this module.
  declarations: [
    NowMomentComponent,
  ],
  // The subset of declarations that should be visible and usable
  // in the components templates of other modules.
  exports: [
    NowMomentComponent,
  ]
})
export class NgLibraryStarterModule {
}
