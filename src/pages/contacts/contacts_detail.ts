import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contacts-detail',
  templateUrl: 'contacts_detail.html'
})
export class ContactsDetailPage {
  card: JSON;

  constructor(public navParams: NavParams) {
    this.card = navParams.get('card');
  }

}