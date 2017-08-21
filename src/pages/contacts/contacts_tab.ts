import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ContactsDetailPage } from './contacts_detail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const COL_NUMBER = 2;

@Component({
  selector: 'page-contacts-tab',
	templateUrl: 'contacts_tab.html'
})
export class ContactsTab {

  cards: Array<Array<JSON>>;

  constructor(public navCtrl: NavController, public params: NavParams, public http: Http) {
    //pass number of tab selected to pull data in that section
    this.getData(parseInt(params.data));
  }

  //retrieve contact data from local json file
  getData(tab: number) {
    var path = 'assets/data/contacts/all_contact_info.json';

    //get contacts data, filtering out that does not match the tab selected
    this.http.get(path).map(res => res.json())
      //.filter(data => data.tab == tab)
      .subscribe(data => {
        data = data.filter(data => data.tab == tab);

        //initialize outer array according to number of contacts
        this.cards = Array(Math.ceil(data.length/COL_NUMBER));

        //assign fixed number of info into inner array
        for(let i = 0, rowNum = 0; i < data.length; i+=COL_NUMBER) {

          //verify number of cards avaliable to fill the column
          var cols_fill = 0;
          for(let j = 0; j < COL_NUMBER; j++) {
            if(data[i+j])  cols_fill++;
            else break;
          }

          //assign data to position
          this.cards[rowNum] = Array(cols_fill);
          for(let j = 0; j < cols_fill; j++) {
            this.cards[rowNum][j] = data[i+j];
          }

          rowNum++;
        }
      });
  }

  cardTapped(event, card) {
    //navigate to detailed contact page once user tapped on cards
    this.navCtrl.push(ContactsDetailPage, {
      card: card
    })
  }
}