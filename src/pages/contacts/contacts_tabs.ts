import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ContactsDetailPage } from './contacts_detail';
import 'rxjs/add/operator/map';

const COL_NUMBER = 2;


@Component({
  selector: 'page-contacts-tab',
	templateUrl: 'contacts_tab.html'
})
export class ContactsTab{

  type: Number;
  cards: Array<Array<JSON>>;

  constructor(public navCtrl: NavController, public params: NavParams, public http: Http) {
    //pass number of tab selected to pull data in that section
    this.getData(parseInt(params.data));
  }

  //retrieve contact data from local json file
  getData(type: number) {
    var path;

    //select file according to the tab number selected
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

    //get contacts data 
    this.http.get(path).map(res => res.json()).subscribe(data => {
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

  cardTapped(event, index) {
    //navigate to detailed contact page once user tapped on cards
    this.navCtrl.push(ContactsDetailPage, {
      index: index
    })
  }
}