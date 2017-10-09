import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardNotAdministrator implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return !this.authService.isAdministrator();
  }
}
