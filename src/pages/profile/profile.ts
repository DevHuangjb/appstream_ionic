import { Component,ViewChild,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Slides,MenuController,Content,ActionSheetController,Img } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  @ViewChild('slides') slides:Slides;
  @ViewChild('content') content:Content;
  @ViewChild('avatar') avatar:Img;
  menuIsOpen:string = 'close';
  tabanimate: boolean = false;
  public old_scrollTop = 0;
  public new_scrollTop = 0;
  selectAvatar;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public menuCtrl: MenuController,
              public actionSheetCtrl: ActionSheetController,private imagePicker: ImagePicker,private camera: Camera, public ref: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showToast(position:string){
    let toast = this.toastCtrl.create({
      message:"Mmmm, I think I like it",
      duration:2000,
      position:position,
    })
    toast.present(toast)
  }

  //页面进入时启动自动播放
  ionViewDidEnter(){
    //防止用户拖拽后停止轮播
    this.slides.autoplayDisableOnInteraction = false;
    this.slides.startAutoplay();
    this.menuCtrl.swipeEnable(true);
  }
  //页面离开时停止自动播放
  ionViewDidLeave(){
    this.slides.stopAutoplay();
    this.menuCtrl.swipeEnable(false);
  }

  ionOpen(){
    this.menuIsOpen = 'open';
  }
  ionClose(){
    this.menuIsOpen = 'close';
  }

  tapMaskDiv(){
    console.log('tapMaskDiv');
    this.menuCtrl.close();
  }

  tapAvatar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Chang Your Avatar',
      buttons: [
        {
          text: 'Photo Library',
          role: 'destructive',
          handler: () => {
            console.log('Photo Library clicked');
            let options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            }
            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64
              this.selectAvatar = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: 'From Camera',
          handler: () => {
            console.log('Camera clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  onScroll($event: any) {

    var scrollTop = $event.scrollTop;

    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

}
