import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';

const privateRoutes: Routes = [
  {
    path:"",
    component:NavbarComponent,
    children:[
      {
        path:"",
        component:ProfileComponent
      },
      {
        path:"bookings",
        component:MybookingsComponent
      },
      {
        path:"faq",
        component:FaqComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
