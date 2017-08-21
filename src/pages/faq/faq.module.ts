import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { FAQPage } from './faq';



@NgModule({
  imports: [ 
      IonicPageModule.forChild(FAQPage),
      CommonModule,
  ],
  declarations:[
      FAQPage,
  ]
})
export class FAQPageModule {}
