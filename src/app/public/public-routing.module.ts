import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { CanActivatePublicGuardService } from './service/canActivatePublicGuard';

const publicRoutes: Routes = [
  {
    path: 'login',
    canActivate:[CanActivatePublicGuardService],
    component:LoginComponent
  },
  {
    path:'signup',
    canActivate:[CanActivatePublicGuardService],
    component:SignUpComponent

  },
  {
    path :'',redirectTo:'/signup',pathMatch:'full'
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
