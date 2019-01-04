import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatIconModule,MatSidenavModule} from '@angular/material';
import { SOAPHandlerService } from '../soap-handler.service'
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {leaveRequestComponent} from './RaiseLeave/raise-leave'

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
    leaves_applied:any;
    location:any;
    phoneNo:any;
    mode:any;
    designation:any;
    experience:any;
    father_name:any;
    mother_name:any;
    projects:any;
    emergency_contact:any;
    status:any;
    leaves_remain:any;
    user_id:any;
   
    ngOnInit(): void {
      this.userDetailsTemplates();
      //this.loginHide=true;
      let leaveComp= localStorage.getItem("InitialValue");
       if(leaveComp=="AppCompShow"){
        this.leaveHide=true;
       }
    }
   constructor(private sOAPHandlerService:SOAPHandlerService,private router:Router,private dialog:MatDialog){

   }
   public userDetailsTemplates(){
   this.sOAPHandlerService.UserDetailsFromCordys(1).subscribe(
     (response:any) =>{
       let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
       console.log(tupleNodes);
       this.user_id=tupleNodes[0].USER_ID;
       this.username=tupleNodes[0].USER_NAME;
       console.log("the username is"+this.username);
       this.gender=tupleNodes[0].GENDER;
       this.manager=tupleNodes[0].MANAGER;
       this.leaves_remain=tupleNodes[0].NO_OF_LEAVES_REMAIN;
       this.phoneNo=tupleNodes[0].PHONE_NO;
       this.location=tupleNodes[0].LOCATION;
       this.mode=tupleNodes[0].PERIOD;
       this.designation=tupleNodes[0].DESIGNATION;
       this.experience=tupleNodes[0].EXPERIENCE;
       this.projects=tupleNodes[0].PROJECTS;
       this.father_name=tupleNodes[0].FATHER_NAME;
       this.mother_name=tupleNodes[0].MOTHER_NAME;
       this.emergency_contact=tupleNodes[0].EMERGENCY_CONTACT;
       this.status=tupleNodes[0].STATUS;
       this.leaves_applied=tupleNodes[0].NO_OF_LEAVES_APPLIED;
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
     
      this.router.navigate(['/leave']);
    }
    public onLogoutClick(){
      localStorage.removeItem("InitialValue");
      this.router.navigate(['/login']);
  
    }
    public leaveRequestRise(){
      localStorage.setItem("LeaveRequest","1");
        const dialogRef= this.dialog.open(leaveRequestComponent,{
          width: '800px',
          data: {userID:this.user_id}
         });
    }
  }