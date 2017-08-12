import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	templateUrl: 'contacts_tab.html'
})
export class ContactsTab{

  type: Number;
  contacts_info: any;

  constructor(public params: NavParams, public http: Http) {
    this.getData(parseInt(params.data));
  }

  getData(type: number) {
    var path;
    switch(type) {
      case 0:
        path = 'assets/data/contacts/faculty_info.json';
        break;
      case 1:
        path = 'assets/data/contacts/staff_info.json';
        break;
      case 2:
        path = 'assets/data/contacts/advisor_info.json';
        break;
      default:
        break;
    }

    this.http.get(path).map(res => res.json()).subscribe(data => {
      this.contacts_info = data;
    })
  }
}