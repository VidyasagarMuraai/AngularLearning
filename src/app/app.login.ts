import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SOAPHandlerService} from './soap-handler.service';
declare var $:any;
@Component({
    selector: 'app-login',
    templateUrl: './app.login.html',
    //styleUrls: ['./app.component.css']
  })
  export class LoginComponent implements OnInit{
    loginHide:boolean;
    loginID: string;
    password: string;
    successlogin:any;
    ngOnInit(): void {
      this.loginHide=true;
      //this.loginID="vidyasagar";
      //this.password="vidyasagar";
      
    }
    constructor(private router : Router,private soapService:SOAPHandlerService){
    }
    getAppComponent(){
      const userObj={
       user_id:this.loginID,password:this.password
      };
      this.soapService.getUserlogin(userObj).subscribe(
        (response:any) =>{
          let tupleNodes = $.cordys.json.findObjects(response, 'USER_LOGIN');
          this.successlogin=tupleNodes[0].count_user;
          console.log("the response is"+this.successlogin);
          if(this.successlogin=='1'){
            localStorage.setItem("InitialValue",'AppCompShow');
            this.loginHide=false;
            this.router.navigate(['/leave']);
          }
          
        },
        (err)=>{

        }
      )
    
      
  
    }
    getForgetPasswordForm(){
      this.router.navigate(['/app']);
      localStorage.setItem("ForgetPassword",'show');
    }
  }