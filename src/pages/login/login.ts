import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tabsPage = TabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginBtnClick(){
    this.navCtrl.setRoot(this.tabsPage);
  }
  signUpClick(){
    this.nativeStorage.setItem('firstOpen',{isFirstOpen:true}).then(
      () => console.log('stored item'),
      error => console.error('error storing item',error)
    )
  }

}
