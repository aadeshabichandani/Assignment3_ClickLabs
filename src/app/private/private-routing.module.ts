import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';
import { CanActivateGuardService } from './services/canActivateGuard.service';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';

const privateRoutes: Routes = [
  {
    path:"",
    canActivate:[CanActivateGuardService],
    component:NavbarComponent,
    children:[
      {
        path:"",
        component:ProfileComponent
      },
      {
        path:"bookings",
        component:MybookingsComponent,
        children:[
          {
            path:"upcomingEvents",
            component:UpcomingBookingsComponent
          },
          {
            path:"pastEvents",
            component:PastBookingsComponent,
          },
          {
            path:"",
            redirectTo:"upcomingEvents",
            pathMatch:"full"
          }
        ]
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
