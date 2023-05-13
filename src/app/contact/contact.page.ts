import { Component, OnInit } from '@angular/core';
import { PartyService} from '../api/party.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  numb!: string;
  buttonDisabled = 'false';
  router: Router;
  constructor(private api: PartyService, router: Router) { 
    this.router = router;
  }   

  send(){
   let x = this.numb;
    if (x.length < 10 || x == undefined || x =='') {
      return this.screenFailed();
    }else{
      this.loading();
    this.api.SendApi(x).subscribe(data => { 
      let resp = data['status'];
       if (resp == 200) {
        return this.screenSucess();
       }else{
        return this.screenFailed();
       }
    },(error)=>{
      return this.screenFailed();
    });
    }
  }

  loading(){
    this.numb = '';
    this.buttonDisabled = 'true';
  };

  screenSucess(){
    console.log('sucess');
    this.buttonDisabled = 'false';
    this.router.navigate(['/tabs/tab2']);

  }
  screenFailed(){
    this.numb = '';
    console.log('failed');
    this.buttonDisabled = 'false';
  }

  limpar(){
    return this.numb = '';
  }

}
