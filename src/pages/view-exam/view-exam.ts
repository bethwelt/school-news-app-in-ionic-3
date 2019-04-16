import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App, AlertController, Slides,LoadingController,NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { ProfilePage } from '../profile/profile';
let base_url = Constant.domainConfig.base_url;

@IonicPage()
@Component({
  selector: 'page-view-exam',
  templateUrl: 'view-exam.html',
})
export class ViewExamPage {

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
    obj:""
  };

  lists: Array<any>;
  first: number;
  base_url: any;
  user_id: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
   user:any='';
   obj:any='';
   e_id:any =null;
  

  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public loadingCtrl:LoadingController,
    public http: Http,
    public authService: AuthService,
     public navParams: NavParams,
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.obj = this.navParams.get('item');
    this.lists = new Array();
  }

  getFeed() {
  //
  this.obj = this.navParams.get('item');

        
        
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewExamPage');
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

}
