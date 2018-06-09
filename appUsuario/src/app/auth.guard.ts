import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService) {
  }
  
  canActivate(): boolean {
    return this.auth.estaAutenticado();
  }

  canActivateChild(): boolean {
    return this.auth.estaAutenticado();
  }
}
