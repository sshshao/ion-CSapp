import { Component } from '@angular/core';
import { ContactsTab1, ContactsTab2, ContactsTab3 } from './contacts_tabs';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

	tab1: any;
	tab2: any;
	tab3: any;

  constructor() {
  	this.tab1 = ContactsTab1;
  	this.tab2 = ContactsTab2;
  	this.tab3 = ContactsTab3;
  }

}