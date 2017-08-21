import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './about';


@NgModule({
  imports: [ 
  	  IonicPageModule.forChild(AboutPage),
  	  CommonModule,
  ],
  declarations:[      
      AboutPage,
  ]
})
export class AboutPageModule {}
