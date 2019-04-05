import {CanActivate, Router} from '@angular/router'
import { Injectable } from '@angular/core';

@Injectable()

export class CanActivateGuardService implements CanActivate{
    constructor(private router:Router){}

    // using this service to allow only logged in users to view private pages.

    canActivate():boolean{
        if(localStorage.getItem('user'))
        {
            //if logged in
            return true;
        }
        else{
            //if not logged in
            alert("Please Login first!");
            this.router.navigate(['/login']);
            return false;
        }
    }
}