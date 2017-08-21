import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  nextPage = LoginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  buttonClick(){
    this.navCtrl.setRoot(this.nextPage);
    this.nativeStorage.setItem('firstOpen',{isFirstOpen:false}).then(
      () => console.log('stored item'),
      error => console.error('error storing item',error)
    );
  }

}
