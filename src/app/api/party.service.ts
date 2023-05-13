import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  APIkey = 'https://casadefestas.digital/';
  constructor(private http: HttpClient) { }

  public RequestAPI(){
    
    return this.http.get(`${this.APIkey}api/getInfos`);
  }

  public SendApi(number:any){

    return this.http.get(`${this.APIkey}api/contact/${number}`,{observe: 'response'});
  }

  public denied(id:any){
    console.log(id);
    return this.http.get(`${this.APIkey}api/denied/${id}`);
  }

  public permited(id:any){
    console.log(id);
    return this.http.get(`${this.APIkey}api/permited/${id}`);
  }


}



