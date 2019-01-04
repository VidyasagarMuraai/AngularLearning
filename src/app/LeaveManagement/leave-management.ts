import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconModule,MatSidenavModule} from '@angular/material';
import { SOAPHandlerService } from '../soap-handler.service'
import {FlexLayoutModule} from '@angular/flex-layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
declare var $:any;
@Component({
    selector: 'app-leave',
    templateUrl: 'leave-management.html',
    styleUrls: ['leave-management.css']
  })
  export class LeaveComponent implements OnInit{
    leaveHide:boolean;
    username:any;
    gender:any;
    manager:any;
    leavesCount:any;
    phoneNo:any;
   
    ngOnInit(): void {
     // this.userDetailsTemplates();
      //this.loginHide=true;
      let leaveComp= localStorage.getItem("InitialValue");
       if(leaveComp=="AppCompShow"){
        this.leaveHide=true;
       }
    }
   constructor(private sOAPHandlerService:SOAPHandlerService,private router:Router){

   }
   public userDetailsTemplates(){
   this.sOAPHandlerService.UserDetailsFromCordys(1).subscribe(
     (response:any) =>{
       let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
       console.log(tupleNodes);
       this.username=tupleNodes[0].USER_NAME;
       console.log("the username is"+this.username);
       this.gender=tupleNodes[0].GENDER;
       this.manager=tupleNodes[0].MANAGER;
       this.leavesCount=tupleNodes[0].NO_OF_LEAVES_REMAIN;
       this.phoneNo=tupleNodes[0].PHONE_NO;
     },
     (err)=>{

     }
   )
    }
    public synUserIntoDb(){
     return this.sOAPHandlerService.SaveCordysDeatilsIntoDB().subscribe(
      (response:any) =>{
        console.log(response);
      }
     )
    }
    public openLeaveReq(){
      localStorage.setItem("LeaveRequest","1");
      this.router.navigate(['/leave']);
    }
    public onLogoutClick(){
      localStorage.removeItem("InitialValue");
      this.router.navigate(['/login']);
  
    }
  }