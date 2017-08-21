import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { DirectionsPage } from './directions';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(DirectionsPage),
      CommonModule,
  ],
  declarations:[
      DirectionsPage,
  ]
})
export class DirectionsPageModule {}
