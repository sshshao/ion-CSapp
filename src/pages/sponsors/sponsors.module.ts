import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { SponsorsPage } from './sponsors';



@NgModule({
  imports: [ 
      IonicPageModule.forChild(SponsorsPage),
      CommonModule,
  ],
  declarations:[
      SponsorsPage,
  ]
})
export class SponsorsPageModule {}
