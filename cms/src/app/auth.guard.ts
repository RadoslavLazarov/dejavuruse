import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      console.log('loggedIn()');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['content/login']);
      return false;
    }
  }
}
