import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './app.login.html',
    //styleUrls: ['./app.component.css']
  })
  export class LoginComponent implements OnInit{
    ngOnInit(): void {
        this.router.navigate(['/login']);
    }
    constructor(private router : Router){
         
       
    }
    getLoginEntry(){
        this.router.navigate(['/login']);
    }
  }