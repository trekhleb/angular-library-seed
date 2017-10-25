import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from '../components/register/register-form.component';

console.log('`Register User` bundle loaded asynchronously');

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        RegisterFormComponent
    ],
    exports: [
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RegisterModule {
}
