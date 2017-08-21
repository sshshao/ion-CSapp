import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './list';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(ListPage),
      CommonModule,
  ],
  declarations:[
      ListPage,
  ]
})
export class ListPageModule {}
