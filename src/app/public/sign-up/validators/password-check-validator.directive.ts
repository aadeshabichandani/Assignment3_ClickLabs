import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector:'[appCheckPasswordValidator]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting:ConfirmPasswordValidatorDirective,
        multi:true
    }]
})
export class ConfirmPasswordValidatorDirective implements Validator{
    @Input() appCheckPasswordValidator:string;
    validate(control:AbstractControl):{[key:string]:any} | null{
        const toCompare = control.parent.get(this.appCheckPasswordValidator);
        if(toCompare && toCompare.value!== control.value)
        {
            
            return{'notEqual':true};
        }
        else{
        return null;}
    }
}