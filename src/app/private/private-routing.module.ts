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
    //route array

    path: "", //empty path because to load this component whenever this private module route has been called.
    canActivate: [CanActivateGuardService],//authGuards to allow logged in users only
    component: NavbarComponent,
    children: [
      {
        // parent-child routing
        path: "",
        component: ProfileComponent
      },
      {
        path: "bookings",
        component: MybookingsComponent,
        children: [
          {
            // further parent-child routing
            path: "upcomingEvents",
            component: UpcomingBookingsComponent
          },
          {
            path: "pastEvents",
            component: PastBookingsComponent,
          },
          {
            path: "", //empty path so that this component gets activated as soon as it's parent component gets activated.
            redirectTo: "upcomingEvents",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "faq",
        component: FaqComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
