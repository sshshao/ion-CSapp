import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(HomePage),
  ],
  declarations:[
  	  HomePage,
  ]
})
export class HomePageModule {}
