import { Component } from '@angular/core';
import { ListService } from '../api/list.service';
import { IonInfiniteScroll, IonRefresher, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  pending: any[] = [];
  confirmated: any[] = [];
  loading: any;
  // completed: any[] = [];
  // canceled: any[] = [];
  constructor(public list: ListService, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {

    if(this.pending.length != 0  || this.pending.length != 0){
      this.refresh();
    }else{
    this.Init();
    }
  };

  Init() {

    this.showLoading();
    this.list.getRequest();
    this.getReturn();


  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando...',
       duration: 1500,
      cssClass: 'custom-loading',
    });

    return this.loading.present();
  }

  denied(id: any) {
    this.list.denied(id);
    this.refresh();
  }


  permited(id: any) {
    this.list.permited(id);
    this.refresh();
  }



  refresh() {

    this.pending = [];
    this.list.pending = [];
    this.list.confirmated = [];
    this.confirmated = [];

    this.Init();

  }

  getReturn() {
    this.pending = this.list.pending;
    this.confirmated = this.list.confirmated;
  }






}
