import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { PrivateRoutingModule } from './private-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    ProfileComponent, 
    NavbarComponent, 
    MybookingsComponent,
    FaqComponent
  ],
  
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PrivateModule { }
