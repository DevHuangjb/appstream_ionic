import { Component } from '@angular/core';

import { MusicPage } from '../music/music';
import { NewsPage } from '../news/news';
import { VideoPage } from '../video/video';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideoPage;
  tab2Root = MusicPage;
  tab3Root = NewsPage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
