import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ClubsPage } from './clubs';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(ClubsPage),
      CommonModule,
  ],
  declarations:[
      ClubsPage,
  ]
})
export class ClubsPageModule {}
