import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPlayerPage } from './video-player';

@NgModule({
  declarations: [
    VideoPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPlayerPage),
  ],
  exports: [
    VideoPlayerPage
  ]
})
export class VideoPlayerPageModule {}
