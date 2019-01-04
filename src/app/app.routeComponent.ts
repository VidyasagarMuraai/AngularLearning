import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';
import { ConfigService } from './app.services';
import { Employee } from './employee'
import { EmployeeData } from './employeedata'



@Component({
  selector: 'app-route-1',
  templateUrl: 'app.routeComponent.html'
  
})
export class AppRouterComponent{
 
}