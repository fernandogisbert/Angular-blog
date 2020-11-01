import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router){}
  
  canActivate(): boolean{
    if (this.auth.isAuth() ){
      return true;
      console.log('acceso correcto');
    }else{
    console.log('acceso denegado');
    this.router.navigateByUrl('/login');
    return false;
    }

    console.log('acceso denegado');
    return false;
  }
  
  
}
