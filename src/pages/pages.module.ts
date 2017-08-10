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
import { HomeTab1, HomeTab2, HomeTab3 } from './home/home_tabs';
import { ContactsTab1, ContactsTab2, ContactsTab3 } from './contacts/contacts_tabs';


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
    HomeTab1,
    HomeTab2,
    HomeTab3,
    ContactsTab1,
    ContactsTab2,
    ContactsTab3
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
    IonicModule.forRoot(SponsorsPage),
    IonicModule.forRoot(FAQPage),
    IonicModule.forRoot(HomeTab1),
    IonicModule.forRoot(HomeTab2),
    IonicModule.forRoot(HomeTab3),
    IonicModule.forRoot(ContactsTab1),
    IonicModule.forRoot(ContactsTab2),
    IonicModule.forRoot(ContactsTab3)
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
    HomeTab1,
    HomeTab2,
    HomeTab3,
    ContactsTab1,
    ContactsTab2,
    ContactsTab3
  ]
})
export class PagesModule {}
