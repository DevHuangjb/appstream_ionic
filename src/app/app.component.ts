import { Component } from '@angular/core';
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private nativeStorage: NativeStorage,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.nativeStorage.getItem('firstOpen')
        .then(
          data => {
            if(data.isFirstOpen){
              this.rootPage = IntroPage;
            }else {
              this.rootPage = LoginPage;
            }
          },
          error => {
            this.rootPage = IntroPage;
          }
        );

      this.menuCtrl.swipeEnable(false)
    });
  }
}
