import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appCheckPasswordValidator]',
    providers: [{
        //for registering our custom validators into Angular's array of validators
        provide: NG_VALIDATORS,
        useExisting: ConfirmPasswordValidatorDirective,
        multi: true
    }]
})
export class ConfirmPasswordValidatorDirective implements Validator {

    //input of the form control of the SignUpForm to which we want to match our value
    @Input() appCheckPasswordValidator: string;

    // default function to run validation check, this function returns an array of errors if the
    // validation fails and null if the validation is successfull
    validate(control: AbstractControl): { [key: string]: any } | null {

        //storing the value of the another form control to which we want to compare
        const toCompare = control.parent.get(this.appCheckPasswordValidator);
        if (toCompare && toCompare.value !== control.value) {
            //if both values are not same, passing our custom error in to the array with a value, to indicate 
            // that the validation has failed and it's now invalid
            return { 'notEqual': true };
        }
        else {
            //if validation succeeds
            return null;
        }
    }
}