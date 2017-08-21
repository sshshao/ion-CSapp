import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { EventsPage } from './events';
import { EventsTab } from './events_tab';
import { NewsTab } from './news_tab';


@NgModule({
  imports: [ 
      IonicPageModule.forChild(EventsPage),
      IonicPageModule.forChild(EventsTab),
      IonicPageModule.forChild(NewsTab),
      CommonModule,
  ],
  declarations:[
      EventsPage,
      EventsTab,
      NewsTab,
  ],
})
export class EventsPageModule {}
