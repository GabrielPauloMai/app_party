import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';

@NgModule({
  imports: [NgxMaskModule.forRoot(), CommonModule,FormsModule, IonicModule, ContactPageRoutingModule, NgxLoadingButtonsModule],
  declarations: [ContactPage]
})
export class ContactPageModule {}
