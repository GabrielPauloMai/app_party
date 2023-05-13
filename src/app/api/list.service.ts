import { Injectable } from '@angular/core';
import { PartyService } from '../api/party.service';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  resp: any[] = [];
  pending: any[] = [];
  confirmated: any[] = [];
  completed: any[] = [];
  canceled: any[] = [];
  router: Router;

  constructor(private api: PartyService, router: Router) { this.router = router; }

  getRequest() {
    this.api.RequestAPI()
      .subscribe(data => {
        this.resp = Object.values(data);
        console.log(this.resp);
        this.getStatus();
      }, (error) => {
        console.log(error);
      });
  }

  getStatus() {
    this.resp.forEach(data => {
      switch (data.status) {
        case 1:
          this.pending.push(data);
          break;
        case 2:
          this.confirmated.push(data);
          break;
        case 3:
          this.completed.push(data);
          break;
        case 4:
          this.canceled.push(data);
          break;
        default:
          break;

      }

    }
    );
    console.log(this.pending.length);
    
  }



  denied(id: any) {
    let resp;
    this.api.denied(id).subscribe(data => {
      this.resp = Object.values(data);
  })
    return resp;
  }

  permited(id: any) {
    let resp;
    this.api.permited(id).subscribe(data => {
      this.resp = Object.values(data);
    })
    return resp;
  }

}














