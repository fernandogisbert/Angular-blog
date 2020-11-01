import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth: AuthService,
              private router: Router) {
    
   }

  ngOnInit(): void {
  }

  acceder(data: NgForm):void{

    const loginResult = this.auth.login(this.user);
   
    if(loginResult){
      this.router.navigateByUrl('/form');
    }else{
      alert('usuario o contraseña incorrectos');
    }
    console.log(loginResult);
  }
}
