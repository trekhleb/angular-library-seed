import { NgModule } from '@angular/core';

import { TickTockComponent } from './components/tick-tock/tick-tock.component';
import { TickTockService } from './services/tick-tock/tick-tock.service';

@NgModule({
  providers: [ TickTockService ],
  declarations: [ TickTockComponent ],
  exports: [ TickTockComponent ]
})
export class TickTockModule {
}
