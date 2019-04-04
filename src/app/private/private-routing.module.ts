import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';
import { CanActivateGuardService } from './services/canActivateGuard.service';

const privateRoutes: Routes = [
  {
    path:"",
    component:NavbarComponent,
    children:[
      {
        path:"",
        component:ProfileComponent,
        canActivate:[CanActivateGuardService]
      },
      {
        path:"bookings",
        component:MybookingsComponent,
        canActivate:[CanActivateGuardService]
      },
      {
        path:"faq",
        component:FaqComponent,
        canActivate:[CanActivateGuardService]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
