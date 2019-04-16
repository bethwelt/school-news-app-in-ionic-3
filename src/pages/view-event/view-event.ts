
import { Component, ViewChild } from "@angular/core";;
import { NavController, App, AlertController, ToastController, LoadingController,NavParams  } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
let base_url = Constant.domainConfig.base_url;

/**
 * Generated class for the ViewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-event',
  templateUrl: 'view-event.html',
})
export class ViewEventPage {
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
   obj:""
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
 let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
             this.http.get(base_url +'api/events').subscribe(data => {
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewEventPage');
  }


  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

}
