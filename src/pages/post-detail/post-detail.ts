import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController,NavParams, App, AlertController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { ProfilePage } from '../profile/profile';
let base_url = Constant.domainConfig.base_url;


/**
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  public lists: Array<any>;
  public first: number;
  user_id: any = null;
  public phone: any = null;
  slider_lists: Array<any>;
  user:any='';
  obj:any;
  userPostData = {
    user_id: "",
    token: "",
    phone: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };

  

 
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
    this.userPostData.user_id = this.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.phone = this.userDetails.phone;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.lists = new Array();
   
    
    
  }
  getFeed() {
    var obj = {};
   this.obj = this.navParams.get('item');
     console.log(obj);
 
    //this.common.presentLoading();
 let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
             
               this.http.get(base_url + 'api/homeworks?id='+this.obj.class_id).subscribe(data => {
                    console.log(data.json());
                    loader.dismiss();
                    this.lists = data.json();
                    //loader.dismiss();
            
                }, error => {
                 console.log(error);
                loader.dismiss();
                })
     
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

}



