import { NgModule } from '@angular/core';

import { MomentComponent } from './components';

/**
 * NgLibraryStarterModule module.
 */
@NgModule({
  // The view classes that belong to this module.
  declarations: [
    MomentComponent,
  ],
  // The subset of declarations that should be visible and usable in the components templates of other modules.
  exports: [
    MomentComponent,
  ]
})
export class NgLibraryStarterModule {
}
