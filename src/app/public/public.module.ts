import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConfirmPasswordValidatorDirective } from './sign-up/validators/password-check-validator.directive';


@NgModule({
  declarations: [
    LoginComponent, 
    SignUpComponent, 
    ConfirmPasswordValidatorDirective

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
})
export class PublicModule { }
