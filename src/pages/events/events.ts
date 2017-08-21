import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { EventsTab } from './events_tab';
import { NewsTab } from './news_tab';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  tab_events: any;
  tab_news: any;

  constructor() {
  	this.tab_events = EventsTab;
  	this.tab_news = NewsTab;
  }

}
