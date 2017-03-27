import { NgModule } from '@angular/core';

import { NowMomentComponent } from './components';

/**
 * NgLibraryStarterModule module.
 */
@NgModule({
  declarations: [
    NowMomentComponent,
  ],
  exports: [
    NowMomentComponent,
  ]
})
export class NgLibraryStarterModule {
}
