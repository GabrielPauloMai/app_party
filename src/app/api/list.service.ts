import { Injectable } from '@angular/core';
import { PartyService } from '../api/party.service';
import { Router, NavigationExtras } from '@angular/router';
import { promises, resolve } from 'dns';
import { rejects } from 'assert';

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
    return new Promise((resolve, reject) => {
      this.req().then((resp: any) => {
        this.resp = resp;
        this.getStatus();
        resolve(1);
      });
    });
  }
  
  req() {
    return new Promise((resolve,reject) => {
      this.api.RequestAPI().subscribe(
        (data) => {
          let resp = Object.values(data);
          resolve(resp);
        },
        (error) => {
          reject(error);
        }
      );
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
    this.resp = [];
    this.resp.push(this.pending, this.confirmated, this.completed, this.canceled);
    return this.resp
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









