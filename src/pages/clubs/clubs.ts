import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html'
})
export class ClubsPage {
  
  clubs: any;

  constructor(public http: Http) {
  	this.getClubsData();
  }

  getClubsData() {
  	this.http.get('assets/data/clubs/clubs_info.json')
  	  .map(res => res.json())
  	  .subscribe(data => {
  		this.clubs = data;
  	});
  }
}
