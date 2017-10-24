import { NavBarComponent, FooterComponent, AboutComponent } from '../components';
import { NgModule, ApplicationRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    AboutComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    AboutComponent
  ]
})
export class LayoutModule {
}
