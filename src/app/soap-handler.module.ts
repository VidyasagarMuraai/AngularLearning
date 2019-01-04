import {
    NgModule
  } from '@angular/core';
  import { HttpModule } from '@angular/http';
  
  import {SOAPHandlerService} from './soap-handler.service';
  
  @NgModule({
    imports: [
      HttpModule
    ],
    providers: [SOAPHandlerService]
  })
  export class SOAPHandlerModule {
    
  }
  
  
  