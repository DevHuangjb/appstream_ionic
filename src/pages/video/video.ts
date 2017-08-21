import { Component,ViewChild } from '@angular/core';
import { NavController,InfiniteScroll } from 'ionic-angular';
import { VideoPlayerPage } from '../video-player/video-player'

@Component({
  selector: 'page-home',
  templateUrl: 'video.html'
})
export class VideoPage {
  nextPage = VideoPlayerPage;
  noMoreData = false;
  loadMoreCnt = 0;
  @ViewChild('infiniteScroll') infiniteScroll : InfiniteScroll;
  imagesModel = [
    'assets/img/video-1.jpg',
    'assets/img/video-2.jpg',
    'assets/img/video-3.jpg',
    'assets/img/video-4.jpg',
    'assets/img/video-5.jpg'
  ];
  images=[];
  constructor(public navCtrl: NavController) {
    this.images = this.images.concat(this.imagesModel);
    console.log(this.images);
  }

  imageClick(){
    this.navCtrl.push(this.nextPage)
  }

  doInfinite(infiniteScroll){
    if(this.noMoreData) return;
    setTimeout(() => {
      this.images = this.images.concat(this.imagesModel);
      this.loadMoreCnt++;
      if (this.loadMoreCnt >= 2) {
        this.noMoreData = true;
      }
      infiniteScroll.complete();
    }, 2000);
  }

}
