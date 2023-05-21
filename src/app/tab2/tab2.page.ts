import { Component } from '@angular/core';
import { ListService } from '../api/list.service';
import { IonInfiniteScroll, IonRefresher, LoadingController } from '@ionic/angular';
import { Console } from 'console';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  icon = 'icon';
  pending: any[] = [];
  confirmated: any[] = [];
  loading: any;
  completed: any[] = [];
  canceled: any[] = [];
  next_party: any;
  constructor(public list: ListService, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {

    this.Init();
  };


  Init() {
    this.showLoading();

    this.list.getRequest()
      .then((result: any) => {
        this.getReturn();
      });
  }


  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      duration: 15000,
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

  disabled() {
    this.icon = "false";
  }


  refresh() {

    this.pending = [];
    this.list.pending = [];
    this.list.confirmated = [];
    this.confirmated = [];

    this.Init();

  }

  getReturn() {
    this.loading.dismiss();
    this.pending = this.list.pending;
    this.confirmated = this.list.confirmated;
    this.completed = this.list.completed;
    this.canceled = this.list.canceled;
    this.next_party = this.list.confirmated[0].date_init;
    this.next_party = this.formatarData(this.next_party);
  }

   formatarData(date:any) {
    const dataObj = new Date(date);
    
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
  }
  


}
