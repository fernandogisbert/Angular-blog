import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserModel){
    if(user.usuario === 'escritor@articulos.com' && user.password === 'misarticulos'){
      localStorage.setItem('auth', 'true');
      return true;
    }else {
      return false;
    }
  }

  isAuth(): boolean {
    if (localStorage.getItem('auth') === 'true'){
      return true;
    }else{
      return false;
    }
  }
}
