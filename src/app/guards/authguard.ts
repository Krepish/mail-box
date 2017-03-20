import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from  "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router,private _auth: AuthService) { }
 
     canActivate():boolean {
        if (this._auth.isLoggedIn()) { 
            // logged in so return true
            return true;
        }
         this.router.navigate(['auth']);
         return false;
    }
 
    
}

