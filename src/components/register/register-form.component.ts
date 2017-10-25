import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
    ValidatorFn,
    FormArray
} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user.model';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }

    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { range: true };
        }
    };
}

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    public customerForm: FormGroup;
    public emailMessage: string;
    @Output() public saveEvent = new EventEmitter();

    public get addresses(): FormArray {
        return this.customerForm.get('addresses') as FormArray;
    }

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(private fb: FormBuilder) { }

    public ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required,
                Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                confirmEmail: ['', Validators.required],
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });

        this.customerForm.get('notification').valueChanges
            .subscribe((value) => this.setNotification(value));
        const emailControl = this.customerForm.get('emailGroup.email');
        const obs: Observable<any> = emailControl.valueChanges.debounceTime(1000);
        obs.subscribe((value) =>
            this.setMessage(emailControl));
    }

    public addAddress(): void {
        this.addresses.push(this.buildAddress());
    }

    public buildAddress(): FormGroup {
        return this.fb.group({
            addressType: 'home',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    }

    public populateTestData(): void {
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
        });
    }

    public save(): void {
        this.saveEvent.emit(this.customerForm.value);
    }

    public setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map((key) =>
                this.validationMessages[key]).join(' ');
        }
    }

    public setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
