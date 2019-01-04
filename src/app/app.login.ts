import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './app.login.html',
    //styleUrls: ['./app.component.css']
  })
  export class LoginComponent implements OnInit{
    loginHide:boolean;
    ngOnInit(): void {
      this.loginHide=true;
    }
    constructor(private router : Router){
    }
    getAppComponent(){
      localStorage.setItem("InitialValue",'AppCompShow');
      this.loginHide=false;
      this.router.navigate(['/leave']);
  
    }
    getForgetPasswordForm(){
      this.router.navigate(['/app']);
      localStorage.setItem("ForgetPassword",'show');
    }
  }