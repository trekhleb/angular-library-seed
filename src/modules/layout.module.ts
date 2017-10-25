import {
  NavBarComponent,
  FooterComponent,
  AboutComponent,
  NoContentComponent
} from '../components';
import { NgModule, ApplicationRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
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
