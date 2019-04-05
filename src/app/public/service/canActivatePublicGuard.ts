import { CanActivate, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import {Location}  from '@angular/common';

@Injectable()

export class CanActivatePublicGuardService implements CanActivate {
    constructor(private router: Router, private location :Location) { }
    canActivate(): boolean {

        //authguard to monitor routing from private to public pages
        if (localStorage.getItem('user')) {
            //asking user if he/she really wants to logout.
            if(window.confirm("You are already Looged in as '" + localStorage.getItem('user')+"'. Want to logout?"))
            {
                //if yes, then loggin him/her out, and navigate back to login page.
                localStorage.clear();
                this.router.navigate(["/login"]);
            }
            else
            {
                //if user does'nt want to logout then navigate back to the previous page our user was on. 
                this.location.back();
            }

            return false;
        }
        else {
            //if no one is logged in
            return true;
        }
    }
}