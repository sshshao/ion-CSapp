import { Component } from '@angular/core';
import { ContactsTab } from './contacts_tabs';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
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