import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GeneralTab } from './general_tab';
import { GMapTab } from './gmap_tab' ;
import { BuildingsTab } from './buildings_tab';

@IonicPage()
@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html'
})
export class DirectionsPage {

	tab_general: any;
	tab_gmap: any;
	tab_building: any;

  constructor(public navCtrl: NavController) {
  	this.tab_general = GeneralTab;
  	this.tab_gmap = GMapTab;
  	this.tab_building = BuildingsTab;

  }

}
