import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { CareerPage } from './career';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(CareerPage),
      CommonModule,
  ],
  declarations:[      
      CareerPage,
  ]
})
export class CareerPageModule {}
