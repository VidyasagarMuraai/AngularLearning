import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';
import { ConfigService } from './app.services';
import { Employee } from './employee'
import { EmployeeData } from './employeedata'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-route-1',
  templateUrl: 'app.routeComponent.html'
  
})
export class AppRouterComponent{
  firstName:any;
  lastName :any;
  job: string;
  parentFname:any;
  parentLame:any;
  formType:any;
  isOn="true";
  Updateid:any;
  dataForSingleUser:any;
  employee : EmployeeData;
  deleteType:boolean;

constructor(public dialogRef: MatDialogRef<AppRouterComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private configService: ConfigService){
    this.Updateid=data.User_ID;
    //console.log( this.Updateid);
    if(data.type=="delete"){
      this.deleteType=true;
     
    }
    else{
      configService.getDataForSingleUser(this.Updateid).subscribe((resp : Employee) => {
        console.log(resp.data);
        this.employee = resp.data;
        console.log("employee "+resp.data.first_name);
        this.firstName=this.employee.first_name;
        this.lastName=this.employee.last_name;
        this.deleteType=false;
        console.log("the type is"+data.type);
      });
    }
    
  }
buildObject() {
  return { id: this.Updateid, name: this.firstName, last_name: this.lastName};
}
  save() {
    this.configService.UpdateUserDetais(this.buildObject()).subscribe((response)=>{
        this.dialogRef.close(this.buildObject());
     console.log(response);
   })
}
close(){
  this.dialogRef.close();
}
yes(){
  this.configService.deleteUserFromSevice(this.Updateid).subscribe((Response) =>{
    console.log("Delete reponse"+Response);
  });
  this.dialogRef.close(this.Updateid);
}
no(){
  this.dialogRef.close();
}
}