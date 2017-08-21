import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ContactsTab } from './contacts_tab';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  //providers: [ ContactsService ]
})
export class ContactsPage {

  tab_faculty: any;
  tab_staff: any;
  tab_advisor: any;

  constructor() {
  	this.tab_faculty = ContactsTab;
  	this.tab_staff = ContactsTab;
  	this.tab_advisor = ContactsTab;
  }

}