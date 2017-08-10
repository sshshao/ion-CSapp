import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	gallary: any;

	event_updates: any;

	career_updates: any;

  	constructor(public navCtrl: NavController, public http: Http) {
  		this.getData();
  	}

  	getData() {
  		this.http.get('assets/data/home/gallary.json').map(res => res.json()).subscribe(data => {
  			this.gallary = data;
  		});

  		this.http.get('assets/data/home/sample_data.json').map(res => res.json()).subscribe(data => {
  			this.event_updates = data;
  			this.career_updates = data;
  		});
  	}
}
