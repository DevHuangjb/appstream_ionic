import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'news.html'
})
export class NewsPage {

  stream: string = "popular";

  constructor(public navCtrl: NavController) {

  }

}
