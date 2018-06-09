import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService){}

  canActivate(): boolean {
    const rol: string = this.auth.rolUsuario()

    return rol=="admin" ? true : false
  }

  canActivateChild(): boolean {
    return this.canActivate()
  }
  
}
