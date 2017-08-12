import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	@ViewChild('gallarySlider') gallarySlider: Slides;

	gallary: any;
	event_updates: any;
	career_updates: any;

  	constructor(public navCtrl: NavController, public http: Http) {
  		this.getGallaryData();
  		this.getUpdatesData();
  	}

  	getGallaryData() {
  		this.http.get('assets/data/home/gallary.json').map(res => res.json()).subscribe(data => {
  			this.gallary = data;

  			this.gallarySlider.update();
  			setTimeout(() => {
  				this.gallarySlider.autoplay = 5000;
  				this.gallarySlider.startAutoplay();
  			}, 500);
  		});
  	}

  	getUpdatesData() {
  		this.http.get('assets/data/home/sample_data.json').map(res => res.json()).subscribe(data => {
  			this.event_updates = data;
  			this.career_updates = data;
  		});
  	}
}
