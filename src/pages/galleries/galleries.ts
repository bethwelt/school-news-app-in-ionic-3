import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App, ModalController, AlertController, ToastController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';
import * as Constant from '../../config/constants';
/**
 * Generated class for the GalleriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let base_url = Constant.domainConfig.base_url;

@IonicPage()
@Component({
  selector: 'page-galleries',
  templateUrl: 'galleries.html',
})

export class GalleriesPage {

 @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: "",
     b_url:""

  };

  lists: Array<any>;
  first: number;
  //base_url: any;
  user_id: any = null;
  phone: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
  user:any='';
  b_url:any='';

 
  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public loadingCtrl:LoadingController,
    public http: Http,
    public authService: AuthService
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.userPostData.b_url = Constant.domainConfig1.b_url;
    this.noRecords = false;
    this.getFeed();
    this.b_url = this.userPostData.b_url;
    this.lists = new Array();
  }
  getFeed() {
      let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
       	       this.http.get(base_url + 'api/gallery').subscribe(data => {
					console.log(data.json());
					//loader.dismiss();
					this.lists = data.json();
					loader.dismiss();
			
				}, error => {
                 console.log(error);
 			    loader.dismiss();
				})
        
        
  }

converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleriesPage');
  }
   profile() {
    this.navCtrl.push(ProfilePage);
  }

}

