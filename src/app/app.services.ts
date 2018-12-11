import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })

export class ConfigService {
  user :any;
  name :any;
  jobName :any;
  constructor(private http: HttpClient) { 
      
        
         //return this.http.get(configUrl);
        

  }
  
  getData(): Observable<any> {
    let configUrl='https://reqres.in/api/users?page=4';
    //console.log(this.http.get(configUrl))
    return this.http.get(configUrl);

  }

 
  UpdateUserDetais(data: any){
    let configUrl='https://reqres.in/api/users/'+data.id;
  console.log("The busObject is"+JSON.stringify(data)) ;
    console.log("The Url is"+configUrl);
    console.log("The First Name is"+data.name);
    console.log("The last Name is"+data.last_name);
    const httpOptions = {
      headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
   })
 }; 
   let body={"Firstname":data.name,
             "LastName": data.last_name}
    return this.http.put(configUrl, body, httpOptions)
    
  }
  getAlbums(): Observable<any> {
     let albumUrl='/cordys/WSDLGateway.wcp?service=http%3A%2F%2Fschemas.cordys.com%2FRandstadLMS/GetLMSUserMasterDetails&organization=o%3DRandstadNew%2Ccn%3Dcordys%2Ccn%3DdefaultInst%2Co%3Dmuraai.com';
     return this.http.get(albumUrl, { responseType: 'text'});
  }
  getDataForSingleUser(data: any){
    let serviceUrl="https://reqres.in/api/users/"+data;
    return this.http.get(serviceUrl);
  }
  deleteUserFromSevice(data: any){
    const httpOptions = {
      headers: new HttpHeaders({
     'Content-Type':  'application/json',
     'Authorization': 'my-auth-token'
      })
    };
    const deleteUrl="https://reqres.in/api/users/"+data;
    return this.http.delete(deleteUrl,httpOptions);

  }
 
}
