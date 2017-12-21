import {
  NavBarComponent,
  FooterComponent,
  AboutComponent,
  NoContentComponent
} from '../components';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
