import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { Injectable } from '@angular/core';

@Injectable()

export class CanActivateGuardService implements CanActivate{
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        if(localStorage.getItem('user'))
        {
            return true;
        }
        else{
            alert("Please Login first!");
            this.router.navigate(['/login']);
            return false;
        }
    }
}