import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App, ModalController, AlertController, ToastController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { ProfilePage } from '../profile/profile';
let base_url = Constant.domainConfig.base_url;


/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

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
    lastCreated: ""
  };

  lists: Array<any>;
  first: number;
  base_url: any;
  user_id: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
  user:any='';

 
  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public http: Http,
    public authService: AuthService,
    public loadingCtrl: LoadingController
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.base_url = Constant.domainConfig.base_url;
    this.lists = new Array();
  }
  getFeed() {
    //this.common.presentLoading();
        let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
             this.http.get(base_url +'api/activities').subscribe(data => {
                console.log(data.json());
                this.lists = data.json();
                if (this.lists.length > 1) {
                loader.dismiss();

          }
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
    console.log('ionViewDidLoad ActivitiesPage');
  }
   profile() {
    this.navCtrl.push(ProfilePage);
  }

}
