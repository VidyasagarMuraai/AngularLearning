import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.services';
import {Router} from '@angular/router';
import {AppRouterComponent} from './app.routeComponent'
import {MatDialog, MatDialogRef} from '@angular/material';

//import {FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
export interface Identity {
  valueOfIdentity: string;
  ViewValue: string;
}
export interface PeriodicElement {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  active: string;
  UserID:any;
  posts: any;
  dataSource: PeriodicElement[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar','Update','Delete'];
  constructor(configService: ConfigService, private router : Router,private dialog: MatDialog){
    configService.getData().subscribe((response) => {
      this.dataSource = response.data;
      console.log(response.data);
    });
  } 
  ngOnInit(){ 
   }
    UpdateData(data:any){
      console.log(data);
      const dialogRef = this.dialog.open(AppRouterComponent,{
       data: {User_ID:data}
      });
      dialogRef.afterClosed().subscribe((reponse) =>{
        console.log(reponse);
       for(let i=0;i<=this.dataSource.length;i++){
         if(this.dataSource[i].id==reponse.id){
          this.dataSource[i].first_name=reponse.name;
          this.dataSource[i].last_name=reponse.last_name;
         }
        }
      })
    }
    DeleteData(data:any){
      const dialogRef=this.dialog.open(AppRouterComponent,{
        data:{User_ID:data,type:"delete"}
        
      });
    }
}
    

     
  

  


