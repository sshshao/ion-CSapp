import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { HomePage } from './home/home';
import { AboutPage } from './about/about';
import { ListPage } from './list/list';
import { EventsPage } from './events/events';
import { ContactsPage } from './contacts/contacts';
import { DirectionsPage } from './directions/directions';
import { CareerPage } from './career/career';
import { ClubsPage } from './clubs/clubs';
import { SponsorsPage } from './sponsors/sponsors';
import { FAQPage } from './faq/faq';
import { ContactsTab } from './contacts/contacts_tabs';
import { ContactsDetailPage } from './contacts/contacts_detail';


@NgModule({
  declarations: [
    HomePage,
    AboutPage,
    ListPage,
    EventsPage,
    ContactsPage,
    DirectionsPage,
    CareerPage,
    ClubsPage,
    SponsorsPage,
    FAQPage,
    ContactsTab,
    ContactsDetailPage
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(AboutPage),
    IonicModule.forRoot(ListPage),
    IonicModule.forRoot(EventsPage),
    IonicModule.forRoot(ContactsPage),
    IonicModule.forRoot(DirectionsPage),
    IonicModule.forRoot(CareerPage),
    IonicModule.forRoot(ClubsPage),
    IonicModule.forRoot(SponsorsPage),
    IonicModule.forRoot(FAQPage),
    IonicModule.forRoot(ContactsTab),
    IonicModule.forRoot(ContactsDetailPage)
  ],
  exports: [
    HomePage,
    AboutPage,
    ListPage,
    EventsPage,
    ContactsPage,
    DirectionsPage,
    CareerPage,
    ClubsPage,
    SponsorsPage,
    FAQPage,
    ContactsTab,
    ContactsDetailPage
  ]
})
export class PagesModule {}
