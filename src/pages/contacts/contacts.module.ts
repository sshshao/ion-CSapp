import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactsPage } from './contacts';
import { ContactsTab } from './contacts_tab';
import { ContactsDetailPage } from './contacts_detail';


@NgModule({
  imports: [
      IonicPageModule.forChild(ContactsPage),
      IonicPageModule.forChild(ContactsTab),
      IonicPageModule.forChild(ContactsDetailPage)
  ],
  declarations: [
      ContactsPage,
      ContactsTab,
      ContactsDetailPage
  ]
})
export class ContactsPageModule {}
