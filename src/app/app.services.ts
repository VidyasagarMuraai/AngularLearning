import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
    providedIn: 'root',
  })

export class ConfigService {
  user :any;
  name :any;
  jobName :any;
  constructor(private http: HttpClient) { 
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
  getAlbums() {
  let defaultCT = "?defaultinst_ct=7d939a0e5ff995735fcdab8a54be58a0fd4a488a" ;
  let headers = new HttpHeaders({ 'Content-Type': 'text/xml',
  'Access-Control-Allow-Origin': '*',
  'SAMLart': 	'MDGYKJmEaFZxo57tLFkV87ErYS7174nBIzWMTL8Ys+qgiJNODFAPZQab' });
  return this.http.post('RandstadNew/' + '/com.eibus.web.soap.Gateway.wcp' + defaultCT,
  '<SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/"><SOAP:Body><GetLMSUserDetails xmlns="http://schemas.cordys.com/RandstadLMS" preserveSpace="no" qAccess="0" qValues=""><userid>shashank.s</userid></GetLMSUserDetails></SOAP:Body></SOAP:Envelope>'
  , { headers:  headers});
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
  getCordysService(){
    let configUrl='RandstadNew' + '/com.eibus.web.soap.Gateway.wcp'+'?defaultinst_ct=7d939a0e5ff995735fcdab8a54be58a0fd4a488a';
    const httpOptions = {
      headers: new HttpHeaders({
     'Content-Type':  'text/xml',
     'Access-Control-Allow-Origin': '*',
     'SAMLart':'MDGYKJmEaFZxo57tLFkV87ErYS7174nBIzU3njhkxy6u7yj1i/2zs4Yp' })
 }; 
    return this.http.post(configUrl,'<SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/"><SOAP:Body><GetLMSUserDetails xmlns="http://schemas.cordys.com/RandstadLMS" preserveSpace="no" qAccess="0" qValues=""><userid>shashank.s</userid></GetLMSUserDetails></SOAP:Body></SOAP:Envelope>', httpOptions)
    
  }

 
}
