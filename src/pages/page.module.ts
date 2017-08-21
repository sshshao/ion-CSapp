import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageModule } from './about/about.module';
import { HomePageModule } from './home/home.module';
import { ListPageModule } from './list/list.module';
import { EventsPageModule } from './events/events.module';
import { ContactsPageModule } from './contacts/contacts.module';
import { DirectionsPageModule } from './directions/directions.module';
import { CareerPageModule } from './career/career.module';
import { ClubsPageModule } from './clubs/clubs.module';
import { SponsorsPageModule } from './sponsors/sponsors.module';
import { FAQPageModule } from './faq/faq.module';


@NgModule({
  imports: [ 
  	  HomePageModule,
  	  AboutPageModule,
  	  ListPageModule,
  	  EventsPageModule,
  	  ContactsPageModule,
  	  DirectionsPageModule,
  	  CareerPageModule,
  	  ClubsPageModule,
  	  SponsorsPageModule,
  	  FAQPageModule,
  ]
})
export class PageModule {}
