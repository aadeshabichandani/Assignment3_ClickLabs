import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import {Location}  from '@angular/common';

@Injectable()

export class CanActivatePublicGuardService implements CanActivate {
    constructor(private router: Router, private location :Location) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('user')) {
            if(window.confirm("You are already Looged in as '" + localStorage.getItem('user')+"'. Want to logout?"))
            {
                localStorage.clear();
                this.router.navigate(["/login"]);
            }
            else
            {
                this.location.back();
            }

            return false;
        }
        else {
            return true;
        }
    }
}