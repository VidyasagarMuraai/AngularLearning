import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {ConfigService} from './app.services';
import { AppRouterComponent } from './app.routeComponent';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatButtonModule,MatRadioModule,MatSelectModule,MatInputModule,MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './app.login';



const routes : Routes = [
  {
    path: 'app',
    component: AppComponent
    
  },
  {
    path: 'routing',
    component: AppRouterComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
 
  ],
  imports: [
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
