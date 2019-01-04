import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {ConfigService} from './app.services';
import { AppRouterComponent } from './app.routeComponent';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatButtonModule,MatRadioModule,MatSelectModule,MatInputModule,MatTableModule,MatCardModule,MatIconModule,MatMenuModule,MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './app.login';
import { SOAPHandlerService } from './soap-handler.service'
import {SOAPHandlerModule} from './soap-handler.module'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {LeaveComponent} from './LeaveManagement/leave-management'
import {leaveManageService} from './LeaveManagement/leave-mangement.service'
import {FlexLayoutModule} from '@angular/flex-layout';
import {leaveRequestComponent} from './LeaveManagement/RaiseLeave/raise-leave'
import {leaveRequestService} from './LeaveManagement/RaiseLeave/raise-leave.service'



const routes : Routes = [
 
  {
    path: 'app',
    component: AppComponent ,
   
  },
  {
    path: 'login',
    component: LoginComponent ,
   
  },
  {
    path: 'leave',
    component: LeaveComponent ,
   
  },
  {
    path: 'leaveReq',
    component: leaveRequestComponent ,
   
  },
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'full'
    
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AppRouterComponent,
    LoginComponent,
    LeaveComponent,
    leaveRequestComponent,
    
 
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    SOAPHandlerModule,
    FlexLayoutModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService,leaveRequestService],
  entryComponents :[AppRouterComponent,AppComponent,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
