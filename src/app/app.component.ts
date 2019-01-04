import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.services';
import {Router} from '@angular/router';
import {AppRouterComponent} from './app.routeComponent'
import {MatDialog, MatDialogRef} from '@angular/material';
import {SOAPHandlerService} from './soap-handler.service'
import { CookieService } from 'angular2-cookie/core';
import { stringify } from '@angular/compiler/src/util';

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

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


 
  ngOnInit(){ 
   
   }
   

    
}

    

     
  

  


