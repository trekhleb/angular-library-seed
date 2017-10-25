import {
  NavBarComponent,
  FooterComponent,
  AboutComponent,
  NoContentComponent
} from '../components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    NoContentComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    NoContentComponent
  ]
})
export class LayoutModule {
}
