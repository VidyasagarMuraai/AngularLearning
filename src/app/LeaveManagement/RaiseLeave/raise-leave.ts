import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'raise-leave',
    templateUrl: './raise-leave.html',
  
  })
  export class leaveRequestComponent implements OnInit{
    leaveShow:boolean;
    
    ngOnInit(): void {
      let i=localStorage.getItem("LeaveRequest");
      //let j=localStorage.getItem("InitialValue");
      if(i=='1'){
        this.leaveShow=true;
        //localStorage.removeItem("LeaveRequest");
      }
    }
    constructor(private router:Router){

    }

    
  }