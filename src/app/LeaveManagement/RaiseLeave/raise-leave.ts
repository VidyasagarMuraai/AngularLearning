import { Component, OnInit,Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SOAPHandlerService } from '../../soap-handler.service'
declare var $:any;
@Component({
    selector: 'raise-leave',
    templateUrl: './raise-leave.html',
  
  })
 
  export class leaveRequestComponent implements OnInit{
    leaveShow:boolean;
    user_id:any;
    remaining_leaves:any;
    applied_leaves:any;
    startDate:any;
    endDate:any;
    reasonLeave:any;
    noOfLeaves:any;
    calTotalLeaves:any;
    ngOnInit(): void {
      let i=localStorage.getItem("LeaveRequest");
   
      if(i=='1'){
        this.leaveShow=true;
      
      }
    }
    constructor(private router:Router,public dialogRef: MatDialogRef<leaveRequestComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private soapHandler:SOAPHandlerService){
         this.user_id=data.userID;
         soapHandler.UserDetailsFromCordys(this.user_id).subscribe(
           (response) =>{
            let tupleNodes = $.cordys.json.findObjects(response, 'USER_DETAILS');
            console.log(tupleNodes);
            this.remaining_leaves=tupleNodes[0].NO_OF_LEAVES_REMAIN;
            this.applied_leaves=tupleNodes[0].NO_OF_LEAVES_APPLIED;
            console.log("the applied leaves is"+this.applied_leaves);
            
           }
         )


    }

    public setLeavesreqIntoDB(){
      const paramObj={
        userID:this.user_id,
        start_date:this.startDate,
        end_date:this.endDate,
        reason_leave:this.reasonLeave,
        no_of_leaves:this.noOfLeaves
      };
      this.soapHandler.saveLeaveReqIntoDB(paramObj).subscribe(
        (response) =>{
          console.log("Successfully Inserted"+response);

          this.dialogRef.close(this.calNoOfAppliedLeaves());
          
        }
      )
    }
    public close(){
      this.dialogRef.close();
    }
    public validation(){
     // alert("Enter");
      var date2 = new Date(this.startDate);
      var date1 = new Date(this.endDate);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());   
      var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
      this.noOfLeaves=diffDays;
      alert("enter")

    }
    public calNoOfAppliedLeaves(){
     
        this.remaining_leaves=this.remaining_leaves-this.noOfLeaves;
        this.applied_leaves= parseInt(this.applied_leaves) + parseInt(this.noOfLeaves);
     
      
      this.soapHandler.updateTotalLeaves(this.user_id,this.remaining_leaves,this.applied_leaves).subscribe(
        (response) =>{
            
        }
      )
    }
    

    
  }