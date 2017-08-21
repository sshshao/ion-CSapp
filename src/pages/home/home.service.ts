import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomePageService {
  /*
	getGallary(): void {
		this.http.get('assets/data/home/gallary.json').map(res => res.json()).subscribe(data => {
  			this.gallary = data;

        	//start auto-play after pulling data
  			this.gallarySlider.update();
  			setTimeout(() => {
  				this.gallarySlider.autoplay = 5000;
  				this.gallarySlider.startAutoplay();
  			}, 500);
  		});
	}

	getUpdates(): void {}
  */
}